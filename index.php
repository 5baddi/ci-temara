<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */

    error_reporting(0); // Disable error reporting
    
    require_once 'dashboard/config.php'; // require db connection
    $connect = connect();
    if($connect->connect_error){
        header("Location: install.php");
    }else{
        header("Location: login/");
    }
?>