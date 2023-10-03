cd ..
export PATH=/home/as251:${PATH}
while :
do
	sleep 5
        git pull newgitlab main
        cd webpage/
        hugo 
        rsync -a public/ /home/as251/www/public
        echo "Press [CTRL+C] to stop.."
done