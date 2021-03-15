<?php 
	include "dbConnection.php";
	
	// if the form's update button is clicked, we need to process the form
	if (isset($_POST['update'])) {
		
		$img = $_POST['img'];
		$idaudio = $_POST['idaudio'];
		$name = $_POST['name'];
		$filename = $_POST['filename'];

		// write the update query
		$sql = "UPDATE `audio` SET `img`='$img',`idaudio`='$idaudio',`name`='$name',`filename`='$filename' WHERE `id`='$idaudio'";

		// execute the query
		$result = $conn->query($sql);

		if ($result == TRUE) {
			echo "Record updated successfully.";
		}else{
			echo "Error:" . $sql . "<br>" . $conn->error;
		}
	}
	
	
	// if the 'id' variable is set in the URL, we know that we need to edit a record
if (isset($_GET['id'])) {
	$idaudio = $_GET['id'];

	// write SQL to get user data
	$sql = "SELECT * FROM `audio` WHERE `id`='$idaudio'";

	//Execute the sql
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		
		while ($row = $result->fetch_assoc()) {
			$img = $_POST['img'];
			$idaudio = $_POST['idaudio'];
			$name = $_POST['name'];
			$filename = $_POST['filename'];
			$id = $row['id'];
		}

	?>
		<h2>Update Form</h2>
		<form action="" method="POST">
		  <fieldset>
		    <legend>Information:</legend>
		    IMAGE:<br>
		    <input type="text" name="image" value="<?php echo $img; ?>">
		    <input type="hidden" name="idaudio" value="<?php echo $id; ?>">
		    <br>
		    NAME:<br>
		    <input type="text" name="name" value="<?php echo $name; ?>">
		    <br>
		    FILENAME:<br>
		    <input type="email" name="filename" value="<?php echo $filename; ?>">
		    <br>
		    <br><br>
		    <input type="submit" value="Update" name="update">
		  </fieldset>
		</form>

		</body>
		</html>




	<?php
	} else{
		// If the 'id' value is not valid, redirect the user back to view.php page
		header('Location: view.php');
	}

}
?>