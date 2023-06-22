cd ..
while :
do
	sleep 5
        git pull origin main
        cd webpage/
        hugo
        cd ..
        echo "Press [CTRL+C] to stop.."
done
