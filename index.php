<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    
    <title>Register Form</title>
</head>
<body>
   <div class="container" id="signup">
    <h1 class="form-title">Register</h1>
    <form action="" action="">

        <div class="input-group">
            <i class="fas fa-user"></i>

            <input type="text" placeholder="First name" class="fname" required>
            <label for="fname">First Name</label>

        </div>

        <div class="input-group">
            <i class="fas fa-user"></i>

            <input type="text" placeholder="Last name" class="lname" required>
            <label for="lname">Last Name</label>
            
        </div>

        <div class="input-group">
            <i class="fas fa-envelope"></i>

            <input type="email" placeholder="email" class="email" required>
            <label for="fname"> Email</label>
            
        </div>

        <div class="input-group">
            <i class="fas fa-lock"></i>

            <input type="text" placeholder="Password" class="password" required>
            <label for="fname">Password</label>
            
        </div>
        
        <input type="submit" value="Sign Up" class="btn" name="SignUp">
    </form>
    <p class="or">
     -----------------OR-----------------
 
     <div class="icon">
         <i class="fab fa-google"></i>
         <i class="fab fa-facebook"></i>
         <!-- <i class="fab fa-twitter"></i> -->
     </div>
 
     <div class="links">
         <p>Account</p>
         <button id="signinButton">
            <a href="login.html">Sign In</a>
         </button>
     </div>
    </p>
   </div>
   <div class="container" id="signin">
        <h1 class="form-title">Sign In</h1>
        <form action="post" action="register.php">
    
            
    
            <div class="input-group">
                <i class="fas fa-envelope"></i>
    
                <input type="email" placeholder="email" class="email" required>
                <label for="fname"> Email</label>
                
            </div>
    
            <div class="input-group">
                <i class="fas fa-lock"></i>
    
                <input type="text" placeholder="Password" class="password" required>
                <label for="fname">Password</label>
                
            </div>
            <div>
                <p class="recover">
                    <a href="#">Recover Password</a>
                </p>
            </div>
            
            <input type="submit" value="Sign In" class="btn" name="SignIn">
            <p class="or">
             -----------------OR-----------------
         
             <div class="icon">
                 <i class="fab fa-google"></i>
                 <i class="fab fa-facebook"></i>
                 <!-- <i class="fab fa-twitter"></i> -->
             </div>
         
             <div class="links">
                 <p>I dont't yet Account?</p>
                 <button id="signupButton"><a href="/Project1/index.html"></a>Sing Up</button>
             </div>
            </p>
        </form>
       </div>
   <script href="index.js"></script>
</body>
<script>
</script>
</html>