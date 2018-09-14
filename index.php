<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
     error_reporting(0);
    $connect = new mysqli("localhost", "root", "", "rechdoc");
    if($connect->connect_error){
        header("Location: install.php");
    }else{
        header("Location: dashboard/");
    }
?>