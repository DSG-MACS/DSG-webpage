cd ..

do
	sleep 5
        git pull origin DSG-webpage
        cd webpage/
        hugo
        cd ..
        echo "Press [CTRL+C] to stop.."
done
