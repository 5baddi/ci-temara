<?php
    session_start();

    error_reporting(0); // Disable error reporting

    require_once 'config.php';
    require_once 'functions.php';

    if(!isLoggedIn()) header("Location: ../login"); // redirect if user not logged in

    $action = isset($_GET['action']) ? strip_tags($_GET['action']) : null;
    $menu = menu_active_page($action);
    include_once 'header.php';
    
    // CI Controller
    if(!isset($action) || empty($action)){
        include_once 'pages/recherche_document.php';       
    }else{
        if(filter_var($action, FILTER_SANITIZE_STRING)){
            strtolower($action);
            str_replace(array(' ', '%'), '_', $action);
            $page = 'pages/'.$action.'.php';
            if(is_file($page)){
                include_once $page;
            }else{
                include_once 'pages/recherche_document.php';
            }
        }
    }
    
    include_once 'footer.php';
?>