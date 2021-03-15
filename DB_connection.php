<?php

//For connecting database

$conn = mysqli_connect("localhost", "root", "root", "signin-up");

if (!$conn) {
	echo "Connection failed!";
}