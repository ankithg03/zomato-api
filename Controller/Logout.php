<?php
Class Logout{
    public function signOutFunction(){
        session_start();
        session_destroy();
        header("Location:../View/index.php");
    } 

}