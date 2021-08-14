#!/bin/bash
cd /home/ec2-user/zombie
sudo npm install
sudo npm install --save react react-dom react-scripts react-particles-js
sudo npm install pm2 -g
sudo npm run build
