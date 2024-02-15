cd ..
export PATH=/home/dsg:${PATH}
while :
do
	sleep 5
        git pull dsg-new-test main
        cd webpage/
        hugo 
        rsync -a public/ /home/dsg/www/public
        echo "Press [CTRL+C] to stop.."
        cd ..
        git push github-publickey main
done
