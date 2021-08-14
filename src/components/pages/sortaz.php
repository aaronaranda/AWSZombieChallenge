
<?php include "../inc/dbinfo.inc"; ?>
<html>
<body>
<h1>User Info</h1>
<?php
  /* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: ". mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  $result = mysqli_query($connection, "SELECT * FROM USER ORDER BY NAME");
               $row = mysqli_fetch_row($result);
            do {
                  $array[] = "{$row[1]},{$row[2]},{$row[3]},{$row[4]},{$row[5]}";
                  $row = mysqli_fetch_row($result);
                } while ($row);

 mysqli_free_result($result);

$sql = "DELETE FROM USER";
   $QueryResult = mysqli_query($connection,$sql);
   $alter = mysqli_query($connection, "ALTER TABLE USER AUTO_INCREMENT = 1");
   mysqli_free_result($alter);

  foreach ($array as $info){
   $user = explode(",",$info);
  $SQLstring = "INSERT INTO USER (NAME, EMAIL, CITY, STATE, PASSWORD) VALUES ('$user[0]','$user[1]','$user[2]','$user[3]','$user[4]');";

  if(!mysqli_query($connection, $SQLstring)) echo("<p>Error adding user data.</p>");
}
?>
<!-- Display table data. -->
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
   $resultsort = mysqli_query($connection, "SELECT * FROM USER");
   while($query_data = mysqli_fetch_row($resultsort)) {
       echo "<tr>";
       echo "<td>",$query_data[0], "</td>",
       "<td>",$query_data[1], "</td>",
       "<td>",$query_data[2], "</td>",
        "<td>",$query_data[3], "</td>",
        "<td>",$query_data[4], "</td>",
        "<td>",$query_data[5], "</td>";
  echo "</tr>";

   }
  mysqli_free_result($resultsort);
   mysqli_close($connection);


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
?>
</body></html>
