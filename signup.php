<!DOCTYPE html>
<html>

<head>
     <title>Register</title>
     <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>

     <!--For getting the values from the user, registration is done after checking up username and password-->

     <form action="signupChecker.php" method="post" class='form'>
          <h2>Register Account</h2>
          <?php if (isset($_GET['error'])) { ?>
               <p class="error"><?php echo $_GET['error']; ?></p>
          <?php } ?>

          <?php if (isset($_GET['success'])) { ?>
               <p class="success"><?php echo $_GET['success']; ?></p>
          <?php } ?>

          <label>Name</label>
          <?php if (isset($_GET['name'])) { ?>
               <input type="text" name="name" placeholder="Name" value="<?php echo $_GET['name']; ?>"><br>
          <?php } else { ?>
               <input type="text" name="name" placeholder="Name"><br>
          <?php } ?>
          <label>Email</label>
          <?php if (isset($_GET['uname'])) { ?>
               <input type="text" name="email" placeholder="User Name" value="<?php echo $_GET['uname']; ?>"><br>
          <?php } else { ?>
               <input type="text" name="uname" placeholder="User Name"><br>
          <?php } ?>


          <label>Password</label>
          <input type="password" name="password" placeholder="Password"><br>

          <label>Re Password</label>
          <input type="password" name="re_password" placeholder="Re_Password"><br>

          <button type="submit">Sign Up</button>
          <a href="index.php" class="ca">Already have an account?</a>
     </form>
</body>

</html>