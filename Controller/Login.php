<?php
require_once ("../Model/User.php");
class Login {
    /**
     * @return bool
     */
    function loginMethod($email, $password) {
        $objmyclass = new UserClass();
   
        $user = $objmyclass->getUser($email, $password);
        if ($user['userEmail'] == $email) {
            session_start();
            $_SESSION['Email'] = $email;
            $userName = $user['userName'];
            $_SESSION['User'] = $userName;
            $_SESSION['UserId'] = $user['userId'];
            return true;
        } else {
            return false;
        }
    }
}
?>