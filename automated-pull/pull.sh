cd ..
while :
do
	sleep 5
        git pull origin main
        cd webpage/
        hugo 
        rsync -a public/ /var/www/html
        cd ..
        echo "Press [CTRL+C] to stop.."
done
