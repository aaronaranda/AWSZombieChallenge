#!/bin/bash
sudo chown -R $USER:$USER /var/www/html
sudo rm -rf /var/www/html/*
cd /home/ec2-user/zombie/src
sudo npm start
sudo pm2 start npm --name "ZombieChallenge" -- start
sudo pm2 startup
sudo pm2 save
sudo pm2 restart all
cd /home/ec2-user/zombie
sudo cp -r build/* /var/www/html
