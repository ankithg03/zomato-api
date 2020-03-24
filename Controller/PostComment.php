<?php
require_once ("../Model/Comment.php");
class PostComment {
    public function sendComment($userId, $comment, $cid) {
        $cityId = $cid;
        $objectComment = new Comment();
        $result = $objectComment->setComment($userId, $comment, $cityId);
    }
    public function getComment() {
        $tempObj = new Comment();
        $res = $tempObj->getComments();
        print_r($res);
    }
    public function delComment($cid) {
        $tempObj = new Comment();
        $res = $tempObj->delComments($cid);
    }
}
?>