<?php include "../inc/dbinfo.inc"; ?>
<html>
<body>
<h1>User Info</h1>

 <?php
 if(isset($_POST['delete'])){
 $num = htmlentities($_POST['NUMBER']);
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: ". mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);
if(!empty($_POST['NUMBER'])){

  $delete = mysqli_query($connection, "DELETE FROm USER WHERE ID = '$num'");
 $result = mysqli_query($connection, "SELECT * FROM USER");
}
?>
<table border="1" cellpadding="2" cellspacing="2">
  <tr>
    <td>ID</td>
    <td>NAME</td>
    <td>EMAIL</td>
    <td>CITY</td>
    <td>STATE</td>
    <td>PASSWORD</td>
  </tr>
<?php
while($query_data = mysqli_fetch_row($result)) {
  echo "<tr>";
  echo "<td>",$query_data[0], "</td>",
       "<td>",$query_data[1], "</td>",
       "<td>",$query_data[2], "</td>",
        "<td>",$query_data[3], "</td>",
        "<td>",$query_data[4], "</td>",
        "<td>",$query_data[5], "</td>";
  echo "</tr>";
}
?>
</table>
<?php

  mysqli_free_result($result);
  mysqli_close($connection);

 echo "<p>Delete User</p>";
echo"<form method=\"post\" action = \"delete.php\">";
 echo "<p><input type=\"text\" name=\"NUMBER\"/></p>";
 echo "<p><input type=\"submit\" value=\"delete\" name=\"delete\"></p>";
echo "</form></br>";
echo "<a href=\"index.html\" class=\"link\">add new user</a></br>";
echo "<a href=\"sortaz.php\" class=\"link\">sort users A-Z</a></br>";
echo "<a href=\"sortza.php\" class=\"link\">add new user</a></br>";
}
?>
</body>
</html>

