<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    function connect(){
        $cnx = new mysqli("localhost", "root", "", "rechdoc");
        if($cnx->connect_errno){
            header('Location: server_error.php');
        }
        return $cnx;
    }
?>