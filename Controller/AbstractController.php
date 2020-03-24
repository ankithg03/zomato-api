<?php
require_once ('Login.php');
require_once ('SignUp.php');
require_once ('Logout.php');
require_once ('PostComment.php');
class AbstractController {
    private $postVal;
    public function __construct($postVal) {
        $this->postVal = $postVal;
    }
    public function GetGenericPost() {
        if (isset($this->postVal["loginsubmit"])) {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $password = md5($password);
            $loginObj = new Login();
            $res = $loginObj->loginMethod($email, $password);
            echo ($res);
        }
        if (isset($this->postVal["signupsubmit"])) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $name=preg_replace('/(<([^>]+)>)/', '', $name); 
           
            $password = $_POST['password'];
            $password=preg_replace('/(<([^>]+)>)/', '', $password); 
            
           $password = md5($password);
           
            $phone = $_POST['phone'];
            $signUpObj = new Signup();
            $res = $signUpObj->register($name, $email, $password, $phone);
            echo ($res);
        }
        if (isset($this->postVal["logout"])) {
            $logOutObj = new Logout();
            $logOutObj->signOutFunction();
        }
        if (isset($this->postVal["postbutton"])) {
            session_start();
            $userId = $_SESSION['UserId'];
            $comment = $_POST['comment'];
            $cid = $_POST['cid'];
            $commentObj = new PostComment();
            $res = $commentObj->sendComment($userId, $comment, $cid);
        }
        if (isset($this->postVal["getComment"])) {
            session_start();
            $commentObj = new PostComment();
            $res = $commentObj->getComment();
        }
        if (isset($this->postVal["delComment"])) {
            $commentObj = new PostComment();
            $res = $commentObj->delComment($this->postVal["cid"]);
            print_r($res);
        }
    }
}
$objlogin = new AbstractController($_POST);
$objlogin->GetGenericPost();
