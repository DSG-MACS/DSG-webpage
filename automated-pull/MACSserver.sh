cd ..
export PATH=/home/as251:${PATH}
while :
do
	sleep 5
        git pull origin main
        cd webpage/
        hugo 
        rsync -a public/ /home/as251/www/public
        echo "Press [CTRL+C] to stop.."
        cd ..
done