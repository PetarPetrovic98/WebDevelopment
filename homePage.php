<?php 

//for welcome page after login and displays your name
session_start();
//returns true if the var exists and has any value
if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>

     <h1>Hello, <?php echo $_SESSION['name']; ?></h1>
     <a href="signout.php">Logout</a>
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>