<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    require_once '../config.php';
    require_once '../functions.php';
    $tmpDoc = $_FILES['doc']['tmp_name'];
    if(is_array($_FILES) && is_uploaded_file($tmpDoc)){
        $nameDoc = $_FILES['doc']['name'];
        $sourcePath = $tmpDoc;
        $targetPath = "../../scan/".$nameDoc;
        $Entry = $nameDoc;
        $extension = strtolower(pathinfo($targetPath, PATHINFO_EXTENSION));
        $nomtir =  substr_count($Entry, '_');
        if(!file_exists($targetPath)){
            if($nomtir == 1 && $extension == "pdf"){
                $filpdf = explode("_", $Entry);
                $numboite = explode(".", $filpdf[1]);
                //$pieces = explode("..", $targetPath);
                if(!insrerdoc($Entry,$targetPath,taille($sourcePath),$numboite[0],$filpdf[0])){
                    echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">Nom de fichier non valide .</br>Il doit être sous forme (CIN_Numerodeboite ex : AX1125_156).</p>';  
                }else{
                    if(move_uploaded_file($sourcePath,$targetPath)){
						 echo embedPDF($nameDoc);
					}else{
						$targetPath;
						echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">Erreur de chargement du document dans le serveur! réessayer</p>';
					}
                   
                }
            }else{
                echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">'.$Entry.' Type de fichier non valide!</p>';
            }
        }else{
            echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">'.$Entry.' Fichier déjâ uploader!</p>';
        }
    }else{
        echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">Pas du document...</p>';
    }