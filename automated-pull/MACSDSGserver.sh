cd ..
export PATH=/home/dsg:${PATH}
while :
do
	sleep 5
        git pull gitlab-fix main
        cd webpage/
        hugo
        rsync -a public/ /home/dsg/www/public
        chmod 775 -R /home/dsg/www/public/
        # chmod a+r -r /home/dsg/www/public/*
        echo "Press [CTRL+C] to stop.."
        cd ..
        git push github-test main
        git push gitlab-fix main
done
