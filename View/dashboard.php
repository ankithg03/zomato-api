<?php
   session_start();
   if(isset($_SESSION['User'])){
      $userName=$_SESSION['User'];
   }
   else{
      $userName="Guest";
   }
   $user ="Hello ".$userName;
   ?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Dashboard</title>
      <link rel="stylesheet" type="text/css" href="/ZomatoApi/View/css/style.css">
   </head>
   <body>
      <header>
         <!-- Navbar -->
         <nav class="navbar">
            <div class="inlineData">
               <ul class="nav-elements">
                  <li class="nav-element"><a id="signupbt"><?php echo($user );?></a></li>
               </ul>
               <ul class="nav-elements right0" id="logout-col">
                  <form method="POST" action="../Controller/AbstractController.php">
                     <li class="nav-element"><button type="submit" name="logout"> logout</button></li>
                  </form>
               </ul>
            </div>
         </nav>
      </header>
      <section id="bg1">
      </section>
      <section>
         <!-- City Card-->
         <div id="cards">
            <div class="card" id="2">
               <img src="images/bang.jpg" alt="Avatar" style="width:100%">
               <div class="container">
                  <h4><b>Bangalore</b></h4>
               </div>
            </div>
            <div class="card" id="36">
               <img src="images/mysore.jpg" alt="Avatar" style="width:100%">
               <div class="container">
                  <h4><b>Mysore</b></h4>
               </div>
            </div>
            <div class="card" id="31">
               <img src="images/mangalore.jpg" alt="Avatar" style="width:100%">
               <div class="container">
                  <h4><b>Mangalore</b></h4>
               </div>
            </div>
         </div>
         <div id="cards">
            <div class="card" id="11611">
               <img src="images/kasargod.jpg" alt="Avatar" style="width:100%">
               <div class="container">
                  <h4><b>Kasaragod</b></h4>
               </div>
            </div>
            <div class="card" id="11299">
               <img src="images/manipal.jpg" alt="Avatar" style="width:100%">
               <div class="container">
                  <h4><b>Manipal</b></h4>
               </div>
            </div>
         </div>
      </section>
      <div id="CityPopUp" class="modal">
         <!-- Individual City content and User Comments-->
         <div class="modal-content">
            <span class="close">&times;</span>
            <div id="Model" class="cityPop ">
               <p id="cityId"></p>
               <div id="collectionDisplay">
               </div>
               <div id="onerow">
                  <input id="comment" class="form-element form-field" placeholder="Post Comment"/>
                  <button id="postCommentbtn" class="btn form-element btnPost">Post Comment</button>
               </div>
               <div id="commentSection">
               </div>
            </div>
         </div>
      </div>
      <script type="text/javascript">
         var userEmail='<?php echo $_SESSION['Email'];?>';
      </script>
      <script src="/ZomatoApi/View/js/script.js"></script>
   </body>
</html>
