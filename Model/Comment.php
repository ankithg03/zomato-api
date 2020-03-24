<?php
require_once ("Orm.php");
class Comment extends Orm {
    function setComment($userId, $comment, $cid) {
        $attributeValue = ['userId' => $userId, 'comment' => $comment, 'cityId' => $cid];
        $tb = 'commentTb';
        $res = $this->loadData($attributeValue, $tb);
        if ($res) {
            $result = $this->getComments();
            echo ($result);
        }
    }
    function getComments() {
        $tb = 'commentTb';
        $tb1 = 'userTb';
        $attr = 'userId';
        $attributeValue = [];
        $res = $this->getAllData($attributeValue, $tb, $tb1, $attr);
        $result = json_encode($res);
        return $result;
    }
    function delComments($cid) {
        $tb = 'commentTB';
        $res = $this->delData($cid, $tb);
        if ($res) {
            $result = $this->getComments();
            echo ($result);
        }
    }
}
?>