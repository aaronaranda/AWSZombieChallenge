import { RDSClient, DescribeDBInstancesCommand, DescribeDBSubnetGroupsCommand, DescribeDBSnapshotsCommand, 
DescribeDBSecurityGroupsCommand } from "@aws-sdk/client-rds";

const client = new RDSClient({ region: 'us-east-2' });
const params = {
    database: 
    host: "",
    user: "",
    password: "",
    port: ""
}

const command1 = new DescribeDBSubnetGroupsCommand(params);
const command2 = new DescribeDBSnapshotsCommand(params);
const command3 = new DescribeDBSecurityGroupsCommand(params);


try {
  const data = await client.send(command1);  
  const data2 = await client.send(command2);
  const data3 = await client.send(command3);
  console.log(data);
  console.log(data2);
  console.log(data3);
} catch (error) {
  console.error(error);
} 


