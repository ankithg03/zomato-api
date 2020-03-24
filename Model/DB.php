<?php
class DB {
    /**
     * @return Object connection
     */
    function getCon() {
        $dsn = 'mysql:dbname=zomatoDB;host=localhost';
        $user = 'magento';
        $password = 'magento';
        try {
            $dbh = new PDO($dsn, $user, $password);
            return $dbh;
        }
        catch(PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }
    }
}
