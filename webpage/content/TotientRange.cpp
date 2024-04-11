#include <chrono>
#include <CL/sycl.hpp>
#include <array>
#include <iostream>

using namespace std::chrono;
using namespace cl::sycl;

class EulerKern;
class EulerReductionKernel;
class EulerReductionKernelND;

constexpr access::mode sycl_read = access::mode::read;
constexpr access::mode sycl_write = access::mode::write;
constexpr access::mode sycl_read_write = access::mode::read_write;

long hcf(long x, long y)
{
  long t;

  while (y != 0) {
    t = x % y;
    x = y;
    y = t;
  }
  return x;
}


// relprime x y = hcf x y == 1

int relprime(long x, long y)
{
  return hcf(x, y) == 1;
}


// euler n = length (filter (relprime n) [1 .. n-1])

long euler(long n)
{
  long length, i;

  length = 0;
  for (i = 1; i < n; i++)
    if (relprime(n, i))
      length++;
  return length;
}

long sumTotient(long lower, long upper)
{
  long sum, i;

  sum = 0;
  for (i = lower; i <= upper; i++)
    sum = sum + euler(i);
  return sum;
}

void runBenchmark()
{
  clock_t start, end;
  double time_taken;

  for (long i = 1; i < 1000000 ; i = i + 100000) {
    start = clock();
    euler(i);
    end = clock();
    time_taken = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("euler(%lu) = %f seconds\n", i, time_taken);
  }   
}

int main(int argc, char* argv[]) {

  unsigned int lower, upper;

  if (argc != 3 ){
    std::cout << "TotientRange needs 2 arguments" << std::endl;
    return 1;
  }

  if (upper<lower){
      std::cout << "upper has to be larger than lower" << std::endl;
    return 1;
  }

  sscanf(argv[1], "%u", &lower);
  sscanf(argv[2], "%u", &upper);

  const size_t delta = upper - lower + 1; 

  /* sequential version */
  auto start = high_resolution_clock::now();
  // long sequentialTotient = sumTotient(lower, upper);
  auto stop = high_resolution_clock::now();
  auto duration = duration_cast<milliseconds>(stop - start);
  // std::cout << "sequential: " << sequentialTotient << ", time: " << duration.count() << " milli secs" << std::endl;

 
  /* SYCL version 1 */
  std::vector<cl_long> sums(delta); 
  start = high_resolution_clock::now();
  // Submit kernel to calculate Euler function for each value between lower and upper
  {
    queue deviceQueue;
    range<1> numOfItems{delta};
    buffer<cl_long, 1> bufferResult(sums.data(), numOfItems);
    deviceQueue.submit([&](handler& cgh) {
      auto result_acc = bufferResult.get_access<sycl_write>(cgh);
      auto kernel = [=](id<1> wID){
        result_acc[wID] = euler(lower + wID[0]);
      };
      cgh.parallel_for<class EulerKern>(numOfItems, kernel);
    });
  }

  // Access results from buffer and sum them
  long sycl_1_result = 0;
  for (long i = 0; i < delta; i++)
    sycl_1_result += sums[i];

  stop = high_resolution_clock::now();
  duration = duration_cast<milliseconds>(stop - start);
  std::cout << "SYCL v1: " << sycl_1_result << ", time: " << duration.count() << " milli secs" << std::endl;
  
  /* SYCL version 2: use a reduction on the GPU device */
  unsigned int sycl_2_result = 0;
  start = high_resolution_clock::now();

  { // beginning of SYCL objects scope, ensures data copied back to host
    queue deviceQueue;
    range<1> numOfItems{delta};
    buffer<unsigned int> bufferFinalSum { &sycl_2_result, 1 };
    try {
    deviceQueue.submit([&](handler& cgh) {
	/* reduction variable */
      auto sumReduction = reduction(bufferFinalSum, cgh, plus<unsigned int>());
      auto sum_kernel = [=](id<1> wID, auto& sum) {
          sum.combine(euler(lower+wID[0]));
      };
      cgh.parallel_for<class EulerReductionKernel>(numOfItems, sumReduction, sum_kernel);
    });
    }
  catch(sycl::exception const& e) {
    std::cout << "Caught synchronous SYCL exception:\n"
              << e.what() << std::endl;
  }

  } // end of SYCL objects scope, ensures data copied back to host

  
  stop = high_resolution_clock::now();
  duration = duration_cast<milliseconds>(stop - start);
  std::cout << "SYCL v2: " << sycl_2_result << ", time: " << duration.count() << " milli secs" << std::endl; 

  /* SYCL version 3: use a nd-range on the GPU device */
  unsigned int sycl_3_result = 0;
  start = high_resolution_clock::now();

  {
    queue deviceQueue;
    range<1> global_size{delta};
    range<1> work_group_size = 64;
    nd_range<1> numOfItems{global_size, work_group_size};
    buffer<unsigned int> bufferFinalSum{&sycl_3_result, 1};
    try{
    deviceQueue.submit([&](handler& cgh){
      auto sumReduction = reduction(bufferFinalSum, cgh, plus<unsigned int>());
      auto kernel = [=] (nd_item<1> item, auto& sum){
        unsigned int idx = (unsigned int) item.get_global_id(0);
        sum.combine((unsigned int) (euler((long) (lower + idx))));
      };
      cgh.parallel_for<class EulerReductionKernelND>(numOfItems, sumReduction, kernel);
    });
    }
    catch(sycl::exception const& e) {
    std::cout << "Caught synchronous SYCL exception:\n"
              << e.what() << std::endl;
  }
  }

  stop = high_resolution_clock::now();
  duration = duration_cast<milliseconds>(stop - start);
  std::cout << "SYCL v3: " << sycl_3_result << ", time: " << duration.count() << " milli secs" << std::endl; 
    
  /* all went well */

  return 0;
}
