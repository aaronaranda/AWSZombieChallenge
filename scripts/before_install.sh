#!/bin/bash
cd /home/ec2-user/zombie
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum -y install nodejs npm
