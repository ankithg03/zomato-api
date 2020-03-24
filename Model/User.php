<?php
require_once ("Orm.php");
/**
 * UserClass
 */
class UserClass extends Orm {
    /**
     * @param string userEmail
     * @param string password
     * @return Associative Array From Function getData(Abstract Class)
     */
    function getUser($userEmail, $password) {
        $attributeValue = ['userEmail' => $userEmail, 'password' => $password];
        $tb = 'userTb';
        return $this->getData($attributeValue, $tb);
    }
    /**
     * @param string userName
     * @param string userEmail
     * @param string password
     * @param string phone
     * @return bool True or False Based On Query Execution
     */
    function loadUser($userName, $userEmail, $password, $phone) {
        
        $attributeValue = ['userName' => $userName, 'userEmail' => $userEmail, 'password' => $password, 'phone' => $phone];
        $tb = 'userTb';
        return $this->loadData($attributeValue, $tb);
    }
}
?>