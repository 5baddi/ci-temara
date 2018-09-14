<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    require_once '../config.php';
    require_once '../functions.php';
    $nomf = isset($_GET['nomf']) ? filter_var(strip_tags($_GET['nomf']), FILTER_SANITIZE_STRING) : null;
    $nomfichier = $nomf.".pdf"; 
    $page = isset($_GET['page']) ? filter_var(intval($_GET['page']), FILTER_SANITIZE_NUMBER_INT) : null;
    $pageLimit = 10;
    $pageStart = 0;
    if(isset($page) && (!empty($page) && $page > 0)){
        $pageStart = ($page - 1) * $pageLimit;
    }
    // Connect to the DB
    $connect = connect();
    
    // Get total pages
    $all = "SELECT * FROM fichiers WHERE nom_fich LIKE '%{$nomf}%' OR nom_fich LIKE '%{$nomfichier}%'";
    $all = $connect->query($all);
    $totalItem = $all->num_rows;
    $pageTotal = ceil($all->num_rows / $pageLimit);
    
    // Fetch data start from where you are
    $sql = "SELECT * FROM fichiers WHERE nom_fich LIKE '%{$nomf}%' OR nom_fich LIKE '%{$nomfichier}%' ORDER BY nom_fich DESC LIMIT $pageStart, $pageLimit"; 
    //$sql = "SELECT * FROM fichiers where nom_fich like '%$nomfichier%'"; 
    
    $connect->real_query($sql);
    $res = $connect->use_result();

    
    if ($connect->connect_errno){
        full_td("Connect failed: ".$connect->connect_error);
        exit();
    }

    if(!isset($nomf) || empty($nomf)){
        full_td("Tapez une indice pour la recherche!");
    }else
    {
        if($all->num_rows > 0){
            while ($data = $res->fetch_assoc()) {
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
            pagin($pageLimit, $page, $totalItem, $pageTotal, "rechercher_fichier");
        }else{
            full_td("Aucun résultat");
        }
    }



