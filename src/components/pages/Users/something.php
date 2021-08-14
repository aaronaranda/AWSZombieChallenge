
<?php include "../inc/dbinfo.inc"; ?>
<html>
<body>
<h1>User Info</h1>
<?php
  /* Connect to MySQL and select the database. */
  $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);

  if (mysqli_connect_errno()) echo "Failed to connect to MySQL: ". mysqli_connect_error();

  $database = mysqli_select_db($connection, DB_DATABASE);

  /* Ensure that the Users table exists. */
  VerifyUsersTable($connection, DB_DATABASE);

  /* If input fields are populated, add a row to the Users table. */
  if(isset($_POST['submit'])) {
  $name = htmlentities($_POST['NAME']);
  $email = htmlentities($_POST['EMAIL']);
  $city = htmlentities($_POST['CITY']);
  $state = htmlentities($_POST['STATE']);
  $password = htmlentities($_POST['PASSWORD']);

  if (strlen($name) || strlen($email) || strlen($city) || strlen($state) || strlen($password)) {
    AddUser($connection, $name, $email, $city, $state, $passsword);
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

$result = mysqli_query($connection, "SELECT * FROM USER");

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

<!-- Clean up. -->
<?php

  mysqli_free_result($result);
  mysqli_close($connection);

?>
<p>Delete User</p>
<form method="post" action = "delete.php">
 <p><input type="text" name="NUMBER"/></p>
 <p><input type="submit" value="delete" name="delete"></p>
</form></br>
<a href="index.html" class="link">add new user</a></br>
<a href="sortaz.php" class="link">sort users A-Z</a></br>
<a href="sortza.php" class="link">add new user</a></br>


</body>
</html>


<?php
  }
/* Add an users to the table. */
function AddUser($connection, $name, $email, $city, $state, $password) {
   $n = mysqli_real_escape_string($connection, $name);
   $e = mysqli_real_escape_string($connection, $email);
   $c = mysqli_real_escape_string($connection, $city);
   $s = mysqli_real_escape_string($connection, $state);
   $p = mysqli_real_escape_string($connection, $password);

   $query = "INSERT INTO USER (NAME, EMAIL, CITY, STATE, PASSWORD) VALUES ('$n', '$e', '$c', '$s', '$p');";

   if(!mysqli_query($connection, $query)) echo("<p>Error adding user data.</p>");
}

/* Check whether the table exists and, if not, create it. */
function VerifyUsersTable($connection, $dbName) {
  if(!TableExists("USER", $connection, $dbName))
  {
     $query = "CREATE TABLE USER (
         ID int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
         NAME VARCHAR(45),
         EMAIL VARCHAR (45),
         CITY VARCHAR (45),
         STATE VARCHAR (45),
         PASSWORD VARCHAR (45)
       )";

     if(!mysqli_query($connection, $query)) echo("<p>Error creating table.</p>");
  }
}

/* Check for the existence of a table. */
function TableExists($tableName, $connection, $dbName) {
  $t = mysqli_real_escape_string($connection, $tableName);
  $d = mysqli_real_escape_string($connection, $dbName);

  $checktable = mysqli_query($connection, "SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME = '$t' AND TABLE_SCHEMA = '$d'");

  if(mysqli_num_rows($checktable) > 0) return true;

  return false;
}

?>