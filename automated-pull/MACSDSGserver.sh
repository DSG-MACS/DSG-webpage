cd ..
export PATH=/home/dsg:${PATH}
while :
do
	sleep 5
        git pull gitlab-fix main
        cd webpage/
        hugo
        chmod o+r public/
        chmod o+r public/* 
        rsync -a public/ /home/dsg/www/public
        echo "Press [CTRL+C] to stop.."
        cd ..
        git push github-test main
        git push gitlab-fix main
done
