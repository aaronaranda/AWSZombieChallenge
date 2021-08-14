# AWS Zombie Challenge

## Description
This was a final challenge for an internship with AWS. The goal was to create and launch
web application useful for during a zombie apocalypse. The main focus was on configuring
the infrastructure with AWS services. 

## AWS Infrastructure/Services
### Network
* all resources in a single VPC
* 4 subnets 
  - 2 public 2 private
  - 2 Availability Zones
* Route Tables with specific Internet Gateway and NAT Gateway configuration
* CloudFront template to create Route53 hosted zone 
* Security Groups specific to private and public subnets

### EC2, App Load Balancer, Auto Scaling Group

                                          +----------+
                                          |   Users  |
                                          +----------+
                                                |
                                                |
                                            VPC                         
                +-------------------------------+------------------------------+
                |                               |                              |
                |                               v                              |
                |                        +--------------+                      |
                |                +-------|     ALB      |------+               |
                |                |       +--------------+      |               |
                |                |                             |               |
                |                |     Auto Scaling Group      |               |
                |+---------------+--------------+--------------+--------------+|
                || AZ 1          |              |              |         AZ 2 ||
                ||               |              |              |              ||
                ||               v              |              v              ||
                ||     +-------------------+    |    +-------------------+    ||
                ||     |                   |    |    |                   |    ||
                ||     |   EC2 Instances   |    |    |   EC2 Instances   |    ||
                ||     |                   |    |    |                   |    ||
                ||     +-------------------+    |    +-------------------+    ||
                |+--------------^---------------+--------------^--------------+|
                |               |      +----------------+      |               |
                |               +----->|      RDS       |<-----+               |
                |                      +----------------+                      |
                +--------------------------------------------------------------+

### Application Load Balancer
* Port 80 HTTP forwarded to 443 HTTPS
* HTTPS forwarded to target group
* HTTP health checks

### Route 53
* Alias A record to ALB
* TLS/SSL certificates using AWS ACM
* CloudFront failover record to S3 bucket

### Custom AMI
* `t3.xlarge`
* Amazon Linux 2
* Elastic IP
* CodeDeploy Agent
* other: `pm2`, `nginx`, `httpd`


## AWS Services App Integration
* AWS Cognito
* AWS RDS
* AWS CodePipeline:
 
                                      CodeSource
                                      +-------------+
                                      |   GitHub    |
                                      +------+------+
                                              |
                                              v
                                      +-------------+
                                      |  CodeBuild  |
                                      +------+------+
                                              |
                                              v
                                      +-------------+
                                      | CodeDeploy  |
                                      +-------------+

## The Application
* React JS

## Thanks to...
My teammates:
* Cristian Chicas (@cchicas)
* Beatriz Cordeiro (@greeeste)
* Estephania Greenwood


