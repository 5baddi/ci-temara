<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    
     require_once '../config.php';
     require_once '../functions.php';

	$nomf = filter_var(strip_tags($_GET['cin']), FILTER_SANITIZE_STRING);
    $page = filter_var(intval($_GET['page']), FILTER_SANITIZE_NUMBER_INT);
    $pageLimit = 10;
    $pageStart = 0;
    if(isset($page) && (!empty($page) && $page > 0)){
        $pageStart = ($page - 1) * $pageLimit;
    }
    //$nomfichier=$nomf.".pdf"; 
    //echo $nomf;
    $connect = connect();
   
    // Get total pages
    $all = "SELECT * FROM fichiers WHERE CIN_fich = '{$nomf}' OR CIN_fich LIKE '{$nomf}%'";
    $all = $connect->query($all);
    $totalItem = $all->num_rows;
    $pageTotal = ceil($all->num_rows / $pageLimit);
    
    
    $sql = "SELECT * FROM fichiers WHERE CIN_fich = '{$nomf}' OR CIN_fich LIKE '{$nomf}%' ORDER BY CIN_fich DESC LIMIT $pageStart, $pageLimit"; 
    $connect->real_query($sql);
    $res = $connect->use_result();
    
    if(!isset($nomf) || empty($nomf)){
        full_td("Tapez une partie du cin pour la recherche!");
    }else{
        if($all->num_rows > 0){
            while($data = $res->fetch_assoc()){
                $viewPDF = viewPDF($data['nom_fich']);
                $linkPDF =  '../scan/'.$data['nom_fich'];
                $all = array($data['idenfich'], $data['nom_fich'], '<a href="'.$linkPDF.'" class="btn btn-default btn-file btn-sm" download title="Telecharger"><i class="fa fa-download"></i></a>&nbsp;<button type="button" class="btn btn-default btn-file btn-sm" title="Vue" data-toggle="modal" data-target="#viewPDF-'.str_replace('.', '-', $data['nom_fich']).'"><i class="fa fa-eye"></i></button>'.$viewPDF);
                tr($all);
            }
            pagin($pageLimit, $page, $totalItem, $pageTotal, "rechercher_fichier_likeCIN");
        }else{
            full_td("Aucun résultat");
        }  
    }
 ?> 