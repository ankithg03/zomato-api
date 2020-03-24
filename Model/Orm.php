<?php
require_once ("DB.php");
/**
 * Abstract Class
 */
abstract class Orm {
    /**
     * @param Associative Array
     * @param string TableName
     * @return bool Success or Unsuccess
     */
    function getData($attributeValue, $tbName) {
        $dbObj = new DB();
        $pdo = $dbObj->getCon();
        $i = 0;
        $cnt = count($attributeValue) - 1;
        if ($cnt < 0) {
            $whereData = "1";
        } else {
            foreach ($attributeValue as $key => $val) {
                if ($i >= $cnt) {
                    break;
                }
                $i++;
                $useAttr.= $key . ',';
                $whereData.= $key . "='" . $val . "' and ";
            }
            end($attributeValue);
            $useAttr.= key($attributeValue) . '';
            $whereData.= key($attributeValue) . "='" . end($attributeValue) . "'";
        }
        $sql = "select * from $tbName where $whereData";
        $stmt = $pdo->query($sql);
        $user = $stmt->fetch();
        return $user;
    }
    function getAllData($attributeValue, $tbName1, $tbName2, $attri) {
        $dbObj = new DB();
        $pdo = $dbObj->getCon();
        $i = 0;
        $cnt = count($attributeValue) - 1;
        if ($cnt < 0) {
            $tbName = $tbName1 . "," . $tbName2;
            $whereData = $tbName1 . "." . $attri . "=" . $tbName2 . "." . $attri;
        } else {
            foreach ($attributeValue as $key => $val) {
                if ($i >= $cnt) {
                    break;
                }
                $i++;
                $useAttr.= $key . ',';
                $whereData.= $key . "='" . $val . "' and ";
            }
            end($attributeValue);
            $useAttr.= key($attributeValue) . '';
            $whereData.= key($attributeValue) . "='" . end($attributeValue) . "'";
        }
        $sql = "select * from $tbName where $whereData";
       
        $stmt = $pdo->query($sql);
        $user = $stmt->fetchAll();
        return $user;
    }
    /**
     * @param associative Array
     * @param string TableName
     * @return bool Success or Unsuccess
     */
    function loadData($attributeValue, $tbName) {
        $dbObj = new db();
        $pdo = $dbObj->getCon();
        $i = 0;
        $cnt = count($attributeValue) - 1;
        foreach ($attributeValue as $key => $val) {
            if ($i >= $cnt) {
                break;
            }
            $i++;
            $useAttr.= $key . ', ';
            $useValue.= '\'' . $val . '\' , ';
        }
        end($attributeValue);
        $useAttr.= key($attributeValue);
        $useValue.= '\'' . end($attributeValue) . '\'';
        $sql = "insert into $tbName ($useAttr) Values($useValue)";
        try {
            return ($pdo->prepare($sql)->execute());
        }
        catch(Exception $e) {
            $pdo->rollback();
            throw $e;
        }
    }
    /**
     * @param string commentid
     * @param string TableName
     * @return bool Success or Unsuccess
     */
    function delData($cid, $tb) {
        $dbObj = new db();
        $pdo = $dbObj->getCon();
        session_start();
        $userid=$_SESSION['UserId'];
        $i = 0;
        $sql = "DELETE FROM `commentTb` WHERE commentId='" . $cid . "' and userId='".$userid."'";
        try {
            return ($pdo->prepare($sql)->execute());
        }
        catch(Exception $e) {
            $pdo->rollback();
            throw $e;
        }
    }
}
