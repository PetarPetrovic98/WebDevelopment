<?php 
include "dbConnection.php";

// if the form's submit button is clicked, we need to process the form
	if (isset($_POST['submit'])) {
		// get variables from the form
		$img = $_POST['img'];
		$name = $_POST['name'];
		$filename = $_POST['filename'];
		
		//write sql query

		$sql = "INSERT INTO `audio`(`img`, `name`, `filename`) VALUES ('$img','$name','$filename')";

		// execute the query

		$result = $conn->query($sql);

		if ($result == TRUE) {
			echo "New record created successfully.";
		}else{
			echo "Error:". $sql . "<br>". $conn->error;
		}

		$conn->close();

	}



?>

<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" href="style.css" >
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
</head>

<body>
<div class="main">
<img src="img/Vanamo_Logo.png"></img>
<p id="logo">Audio player</p>


</div>
<div class="header">
<h1>Create</h1>
</div>

<form action="" method="POST">
  <div class="container">
    <legend>Information:</legend>
    <p>IMAGE:</p>
    <input type="file" name="image">
    <br>
	<br>
	<p>NAME:</p>
    <input type="text" name="name">
    <br>
	<br>
    <p>SONG FILENAME:</p>
    <input type="file" name="filename">
    <br>
    <br><br>
    <input type="submit" class="btn btn-success" name="submit" value="Submit">
  </div>
</form>

</body>
</html>