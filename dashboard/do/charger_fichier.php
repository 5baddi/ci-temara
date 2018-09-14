<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    require_once '../config.php';
    require_once '../functions.php';
    $cheminentre = "../../scan/";//$_GET['chemin'];
    $i=1;

    $fileexiste;
    $fileexiste=1;

    $file_existe;
    $file_existe=1;
    
   

    if($fileexiste==1)
    {
        if(file_exists($cheminentre))
        {
            ScanDirectory($cheminentre);
            if($file_existe!=1){
                ECHO "!=1";
            }
        }else
        {
            $msg = 'Le dossier '.$cheminentre.' n\'existe pas.';
            full_td($msg);
        }
       //ScanDirectory("$cheminentre");	  
    }else
    {
        $msg = 'Fichier n\'existe pas.';
        full_td($msg);
    }
?>