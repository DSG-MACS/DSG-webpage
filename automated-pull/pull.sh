cd ..
while :
do
	sleep 5
        git pull origin DSG-webpage
        cd webpage/
        hugo 
        cp -a public/ /var/www/html/
        cd ..
        echo "Press [CTRL+C] to stop.."
done
