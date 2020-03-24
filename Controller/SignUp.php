<?php
require_once("../Model/User.php");
/**
 * @class SignUp
 */
    class Signup{
    /**
      * @param String Name  
      * @param String Email
      * @param String password
      * @param String phone
      * @return bool Success or Unsuccess Response
      */
        function register($name, $email, $password, $phone){
            $password=(''.$password);
            $name=(''.$name);
            $name = $this->replace($name);
            $email = $this->replace($email);
            $password = $this->replace($password);
            $phone = $this->replace($phone);
            $objmyclass=new UserClass();
            $responseMessage=$objmyclass->loadUser($name,$email,$password,$phone);
            if($responseMessage){
                return true;
            }
            else{
                return false;
            }
        }
        function replace($str){
            return str_replace('\'', '\\\'',  $str);
        }
        
    }
?>