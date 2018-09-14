<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    
     require_once '../config.php';
     require_once '../functions.php';

    $nomf = isset($_GET['boite']) ? filter_var(intval($_GET['boite']), FILTER_SANITIZE_NUMBER_INT) : null;
    $page = isset($_GET['page']) ? filter_var(intval($_GET['page']), FILTER_SANITIZE_NUMBER_INT) : null;
    $pageLimit = 10;
    $pageStart = 0;
    if(isset($page) && (!empty($page) && $page > 0)){
        $pageStart = ($page - 1) * $pageLimit;
    }
    //$nomfichier=$nomf.".pdf"; 
    //echo $nomf;
    $connect = connect();
   
    // Get total pages
    $all = "SELECT * FROM fichiers WHERE numeboit = '{$nomf}'";
    $all = $connect->query($all);
    $totalItem = $all->num_rows;
    $pageTotal = ceil($all->num_rows / $pageLimit);
    
    
    $sql = "SELECT * FROM fichiers WHERE numeboit = '{$nomf}' ORDER BY numeboit DESC LIMIT $pageStart, $pageLimit"; 
    $connect->real_query($sql);
    $res = $connect->use_result();
    
    if(!isset($nomf) || empty($nomf)){
        full_td("Tapez un numero d'une boite pour la recherche!");
    }else{
        if($all->num_rows > 0){
            while($data = $res->fetch_assoc()){
                $viewPDF = viewPDF($data['nom_fich']);
                $linkPDF =  '../scan/'.$data['nom_fich'];
                if(file_exists("../".$linkPDF)){
                    $viewOnline = '<div id="downView"><a href="'.$linkPDF.'" class="btn btn-default btn-file btn-sm" download title="Telecharger"><i class="fa fa-download"></i></a>&nbsp;<button type="button" class="btn btn-default btn-file btn-sm" title="Vue" data-toggle="modal" data-target="#viewPDF-'.str_replace('.', '-', $data['nom_fich']).'"><i class="fa fa-eye"></i></button>'.$viewPDF.'</div>';
                 }else{
                    $viewOnline = 'Indisponible en ligne !';
                 }
                $all = [$data['idenfich'], $data['nom_fich'], $viewOnline];
                tr($all);
            }
            pagin($pageLimit, $page, $totalItem, $pageTotal, "rech_fichier_par_boite");
        }else{
            full_td("Aucun résultat");
        }  
    }
 ?> 