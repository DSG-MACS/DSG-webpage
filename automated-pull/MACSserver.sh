cd ..
while :
do
	sleep 5
        git pull newgitlab main
        cd webpage/
        hugo 
        rsync -a public/ /home/as251/www/public
        cd ..
        git push github main
        echo "Press [CTRL+C] to stop.."
done