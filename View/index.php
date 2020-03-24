<?php 
   session_destroy();  
   ?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Zomato Api</title>
      <link rel="stylesheet" type="text/css" href="/ZomatoApi/View/css/style.css">
   </head>
   <body>
      <section id="bg">
      </section>
      <!-- Modal -->
      <div id="myModal" class="modal">
         <!-- Login Model -->
         <div class="modal-content">
            <div id="login Model">
               <input id="email" class="form-element form-field" placeholder=" Enter Your Email"/>
               <p id="emailErr" class="err"> .</p>
               <input id="password" type="password" class="form-element form-field" placeholder=" Enter Your Password"/>
               <p id="passErr" class="err"> .</p>
               <button id="loginbutton" class="btn form-element">Login</button>
               <button id="guestlogin" class="btn form-element">Enter as Guest User</button>
               <div class="centerText">Do You have an Account? No then <a id="signupbtn">Click here!</a></div>
            </div>
         </div>
      </div>
      <div id="signUpModel" class="modal">
         <!-- Modal -->
         <div class="modal-content">
            <div id="Signup Model">
               <input id="name" class="form-element form-field" placeholder=" Enter Your Name"/>
               <p id="sNameErr" class="err"> .</p>
               <input id="email1" class="form-element form-field" placeholder=" Enter Your Email"/>
               <p id="sEmailErr" class="err"> .</p>
               <input id="password1" type="password" class="form-element form-field" placeholder=" Enter Your Password"/>
               <p id="sPassErr" class="err"> .</p>
               <input id="phone" class="form-element form-field" placeholder=" Enter Your Phone Number"/>
               <p id="sPhoneErr" class="err"> .</p>
               <button id="signupbutton" class="btn form-element">Sign Up</button>
               <button id="guest" class="btn form-element">Enter as Guest User</button>
               <div class="centerText">Do You Already have an Account? Click here! to <a id="loginbtn">Login!!</a></div>
            </div>
         </div>
      </div>
      <script src="/ZomatoApi/View/js/script.js"></script>
   </body>
</html>
