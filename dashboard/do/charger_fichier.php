<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    
    require_once '../config.php';
    require_once '../functions.php';
    $cheminentre = "../../scan/";

    if(file_exists($cheminentre)) ScanDirectory($cheminentre);
    else full_td("Le dossier ".$cheminentre." n'existe pas.");