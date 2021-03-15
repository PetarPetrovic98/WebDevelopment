<?php 
	include "dbConnection.php";
	
	//write the query to get data from audio table

	$sql = "SELECT * FROM audio";

	//execute the query

	$result = $conn->query($sql);

?>	

<!DOCTYPE html>

<html>
	
	<head>
		<title>View Page</title>
		<!-- to make it looking good im using bootstrap -->
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="style.css" >
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	</head>
	
	<body>
		<div class="main">
		<img src="img/Vanamo_Logo.png"></img>
		<p id="logo">streamy</p>
		</div>
		
		<div class="header">
		<h1>Welcome Admin!</h1>
		</div>
		
		<div class="container">
				
			<h2>Audios</h2>
			
				<table class="table">
				
					<thead>
						<tr>
							<th>ID</th>
							<th>IMAGE</th>
							<th>SONG NAME</th>
							<th>FILENAME</th>
							<th>ACTION</th>
						</tr>
					</thead>
					
					<tbody>	
						<?php
							if ($result->num_rows > 0) {
								//output data of each row
								while ($row = $result->fetch_assoc()) {
									
						?>
					<tr>
						<td><?php echo $row['idaudio']; ?></td>
						<td><img src="<?php echo $row['img']; ?>" width="50" height="50"></img></td>
						<!--- <img src="data:image/jpg;charset=utf8;base64 width="50" height="50",<?php echo base64_encode($row['img']); ?>" />
						<td><?php echo $row['name']; ?></td>
						<td><?php echo $row['filename']; ?></td>
						<td><a class="btn btn-info" href="update.php?id=<?php echo $row['id']; ?>">Edit</a>&nbsp;<a class="btn btn-danger" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a></td>
						
					</tr>	
						
						<?php		}
							}
						?>
						
						<div class="crtBtn">
							<tr>
								<td><a class="btn btn-info" class="btn btn-success" href="create.php">Create</a></td>
							</tr>
						<div>
						

								
						<?php	

						
							
						?>
	        	
					</tbody>
					
				</table>		
		</div>	
	</body>		
</html>