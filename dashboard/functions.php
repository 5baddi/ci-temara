<?php
    /*
     * Developed by @5Baddi
     * more info visit : www.baddi.info
     */
    // Breadcrumb admin page
    function adm_page_breadcrumb($action){
            echo'<ol class="breadcrumb">';
            if(!isset($action) || empty($action)){
                echo'<li><a href="?action=charger_documents" class="active"><i class="fa fa-home"></i>&nbsp;Accueil</a></li>';
            }else{
                strtolower($action);
                str_replace(array(' ', '%'), '_', $action);
                if(filter_var($action, FILTER_SANITIZE_STRING)){
                    echo '<li><a href="?action=charger_documents" class="';
                    if($action != "charger_documents"){
                        echo "active";
                    }
                    echo '"><i class="fa fa-home"></i>&nbsp;Accueil</a></li>';
                    switch($action){
                        case "liste_cin_boite":
                            echo '<li><a href="?action=liste_cin_boite" class="active"><i class="fa fa-bar-chart-o"></i>&nbsp;Liste CIN par Boite</a></li>';
                        break;
                        case "liste_cin_alphabetique":
                            echo '<li><a href="?action=liste_cin_alphabetique" class="active"><i class="fa fa-table"></i>&nbsp;Liste CIN par Alphabétique</a></li>';
                        break;
                        case "ajouter_document":
                            echo '<li><a href="?action=ajouter_document" class="active"><i class="fa fa-upload"></i>&nbsp;Ajouter document</a></li>';
                        break;
                    }
                }
            }
            echo '</ol>';
    }
    
    // Add active class to page menu of current page
    function menu_active_page($action){
        $menu = []; 
        if(empty($action) || $action == "recherche_document"){
            $menu[0] = "active";
        }else{
            switch($action){
                case "charger_documents":
                    $menu[1] = "active";
                break;
                case "liste_cin_boite":
                    $menu[2] = "active";
                    $menu[3] = "active";
                break;
                case "liste_cin_alphabetique":
                    $menu[2] = "active";
                    $menu[4] = "active";
                break;
                case "ajouter_document":
                    $menu[5] = "active";
                break;
            }
        }
        return $menu;
    }
    
    
    // Notification & erros functions
    function full_td($msg){
        $type = $type ? null : "error";
        $colspan = $colspan ? null : 3;
        // Print string msg as table without lose the style and align of the table
        switch($type)
        {
            default:
                $icon = "exclamation-triangle";
                $style = "text-danger";
            break;
        }
        $msg = filter_var($msg, FILTER_SANITIZE_STRING);
        echo '<tr><td colspan="3"><i class="fa fa-4x fa-'.$icon.' '.$style.'"></i><p class="'.$style.'">'.$msg.'</p></td></tr>';
    }
    
    function tr(array $msg){
        // This function print an array as table
        // Syntax : echo '<tr><td>'.$i++.'</td><td>'.$Entry.'</td><td>'.$filpdf[1].'</td></tr>';
        if(($size = sizeof($msg)) > 1)
        {
            $r = 0;
            echo '<tr>';//<td>'.$i++.'</td><td>'.$Entry.'</td><td>'.$filpdf[1].'</td>';
            while($r < $size){
                echo '<td>'.$msg[$r].'</td>';
                $r++;
            }
            echo '</tr>';
        }
    }
    
    // Pagination
    function pagin($item_per_page, $current_page, $total_records, $total_pages, $jsFun)
    {
        $pagination = '';
        $current_page = ($current_page == 0) ? 1 : $current_page;
        if($total_pages > 0 && $total_pages != 1 && $current_page <= $total_pages){ //verify total pages and current page number
            $pagination .= '<tr><td colspan="3"><p class="help-block pull-left">Affichage de '.$current_page.' à '.$total_pages.' des '.$total_records.' Résultats.</p><ul class="pagination pagination-sm no-margin pull-right">';

            $right_links    = $current_page + 3;
            $previous       = $current_page - 3; //previous link
            $next           = $current_page + 1; //next link
            $first_link     = true; //boolean var to decide our first link

            if($current_page > 1){
                $previous_link = ($previous==0)?1:$previous;
                $pagination .= '<li><a href="#" data-page="1" onclick="getPage_'.$jsFun.'(this);" title="Premier"><i class="fa fa-backward"></i></a></li>'; //first link
                $pagination .= '<li><a href="#" data-page="'.$previous_link.'" onclick="getPage_'.$jsFun.'(this);" title="Précédent"><i class="fa fa-arrow-left"></i></a></li>'; //previous link
                    for($i = ($current_page-2); $i < $current_page; $i++){ //Create left-hand side links
                        if($i > 0){
                            $pagination .= '<li><a href="#" data-page="'.$i.'" onclick="getPage_'.$jsFun.'(this);" title="Page'.$i.'">'.$i.'</a></li>';
                        }
                    }  
                $first_link = false; //set first link to false
            }

            if($first_link){ //if current active page is first link
                $pagination .= '<li class="active"><a href="#">'.$current_page.'</a></li>';
            }elseif($current_page == $total_pages){ //if it's the last active link
                $pagination .= '<li class="active"><a href="#">'.$current_page.'</a></li>';
            }else{ //regular current link
                $pagination .= '<li class="active"><a href="#">'.$current_page.'</a></li>';
            }

            for($i = $current_page+1; $i < $right_links ; $i++){ //create right-hand side links
                if($i<=$total_pages){
                    $pagination .= '<li><a href="#" data-page="'.$i.'" onclick="getPage_'.$jsFun.'(this);" title="Page '.$i.'">'.$i.'</a></li>';
                }
            }
            if($current_page < $total_pages){
                    $next_link = ($i > $total_pages)? $total_pages : $i;
                    $pagination .= '<li><a href="#" data-page="'.$next_link.'" onclick="getPage_'.$jsFun.'(this);" title="Suivant"><i class="fa fa-arrow-right"></i></a></li>'; //next link
                    $pagination .= '<li><a href="#" data-page="'.$total_pages.'" onclick="getPage_'.$jsFun.'(this);" title="Dernier"><i class="fa fa-forward"></i></a></li>'; //last link
            }

            $pagination .= '</ul></td></tr>';
        }else{
            echo '<tr><td colspan="3"><p class="help-block pull-left">Affichage de '.$current_page.' à '.$total_pages.' des '.$total_records.' Résultats.</p></td></tr>';
        }
        echo $pagination; //return pagination links
    }
    
	function embedPDF($file_name){
		return'
			<div class="embed-responsive embed-responsive-16by9">
				<iframe class="embed-responsive-item" src="../scan/?file='.$file_name.'"></iframe>
            </div>
		';
	}
	
    function viewPDF($file_name){
        $PDF = $file_name;
		$linkPDF = "../scan/".$PDF;
        $file_name = str_replace('.', '-', $file_name);
            return'
                <div class="modal fade" id="viewPDF-'.$file_name.'" role="dialog" aria-labelledby="viewPDF-title-'.$file_name.'">
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 class="modal-title" id="viewPDF-title-'.$file_name.'">Vue la document : '.str_replace('-', '.', $file_name).'</h4>
                        </div>
                        <div class="modal-body">
                            '.embedPDF($PDF).'
                        </div>
                        <div class="modal-footer">
                            <a href="'.$linkPDF.'" class="btn btn-primary" download><i class="fa fa-download" download></i>&nbsp;Telecharger</a>
                            <a href="#" class="btn btn-default" data-dismiss="modal"><i class="fa fa-close"></i>&nbsp;Quitter</a>
                        </div>
                      </div>
                    </div>
                  </div>';   
        
    }
    
    // exist script functions & edited by @5Baddi
    function insrerdoc($nom,$lien,$taille,$numboite,$CIN_fich)
    {
       $connect = connect();
       //création de la requête SQL:
      $sql = "INSERT INTO fichiers (nom_fich, lienfich, tailfich, numeboit, CIN_fich) VALUES ('{$nom}', '{$lien}', '{$taille}', '{$numboite}', '{$CIN_fich}')" ;
      //exécution de la requête SQL:
      $req = mysqli_query($connect, $sql);
      if($req){
          return true;
      }else{
            // If the query failed!
            die(mysqli_error($connect));
      }
    }
    
    function taille($fichier){
        global $size_unit;
        // Lecture de la taille du fichier
        $taille = filesize($fichier);
        // Conversion en Go, Mo, Ko
        if ($taille >= 1073741824) 
        { $taille = round($taille / 1073741824 * 100) / 100 . " Go"; }
        elseif ($taille >= 1048576) 
        { $taille = round($taille / 1048576 * 100) / 100 . " Mo"; }
        elseif ($taille >= 1024) 
        { $taille = round($taille / 1024 * 100) / 100 . " Ko"; }
        else
        { $taille = $taille . " o"; } 
        if($taille==0) {$taille="-";}
        return $taille;
    }
    
    function deletett()
    {
       $connect = connect();
       //création de la requête SQL:
       $sql = "DELETE FROM fichiers" ;
       //exécution de la requête SQL:
       $requete = $connect->query($sql) or die( $connect->connect_error ) ;
       //affichage des résultats, pour savoir si l'insertion a marchée:
    }

    function insertmultiple($sql)
    {
        $connect = connect();
        if(!$connect->multi_query($sql)) 
        {
            $msg = "Multi query failed: (".$connect->errno.") ".$connect->error;
            full_td($msg);
        }
        do{
            if ($res = $connect->store_result()) {
                var_dump($res->fetch_all(MYSQLI_ASSOC));
                $res->free();
            }
        }while($connect->more_results() && $connect->next_result());
    } 
    
    function count_files($dir)
    {
        $num = 0;
        $dir_handle = opendir($dir);
        while($entry = readdir($dir_handle))
        {
            if(is_file($dir.'/'.$entry) && strtolower(pathinfo($dir.'/'.$entry, PATHINFO_EXTENSION)) == "pdf")
            {
                $num++;
                //echo $num."===>".$entry."<br>";
            }
        }
        closedir($dir_handle);
        return $num;
    } 
    
    function ScanDirectory($Directory){
        global $file_existe;					
        //echo $liste_numero;
        /* for ($i = 0; $i <= $nb_element-1; $i++) {						
            echo $ann[$i]."_".$numer[$i].".pdf";
        } */
        $MyDirectory = opendir($Directory) or die('Erreur');
        $compteur = count_files($Directory);			
        $sql=null;
        $nbel=1;
        
        deletett();
        // Order Desc from new to the old
        $i = count_files($Directory)+1;
        // to order by Asc change the previous to : $i = 0; 
        while($Entry = @readdir($MyDirectory)) 
        {
            $DirE = $Directory.'/'.$Entry;
            if(is_dir($DirE)&& $Entry != '.' && $Entry != '..')
            {
                //echo '<ul>'.$Directory;
                $msg = ScanDirectory($DirE);
                full_td($msg);
                //echo '</ul>';
            }else 
            {
                $extension = strtolower(pathinfo($DirE, PATHINFO_EXTENSION));
                if(strtolower($extension) == "pdf")
                {
                    // Order Desc from new to old
                    $i--;
                    // if you want to order by Asc change the previous instruction to : $i++;
                    //echo $Entry[0]."<br>"; 
                    $filpdf = explode("_", $Entry);
                    $msg = array($i, $Entry, $filpdf[1]);
                    tr($msg);
                    $numboite = explode(".", $filpdf[1]);

                    $pieces = explode("..", $DirE);

                    if($nbel==1)
                    {
                        $sql .= "INSERT INTO fichiers (nom_fich, lienfich, tailfich, numeboit, CIN_fich) VALUES ('{$Entry}', '{$DirE}', '{taille($DirE)}', '{$numboite[0]}', '{$filpdf[0]}')";
                    }else
                    {
                        $sql .= "INSERT INTO fichiers (nom_fich, lienfich, tailfich, numeboit, CIN_fich) VALUES ('{$Entry}', '{$DirE}', '{taille($DirE)}', '{$numboite[0]}', '{$filpdf[0]}')";
                    }
                    insrerdoc($Entry,$Directory.'/'.$Entry,taille($Directory.'/'.$Entry),$numboite[0],$filpdf[0]);
                    // echo $nbel." = ".$Entry." ;".$numboite[0]." ; ".$filpdf[0]."<br>";
                    $nbel++;
                }
            }
        }
       insertmultiple($sql);
        closedir($MyDirectory);
    }
    
    // Select numBoite
    function numBoite(){
        $connect = connect();
        $sql = "SELECT DISTINCT(numeboit) numeboit FROM fichiers";
		$all = $connect->query($sql);
		if($all->num_rows > 0){
			$connect->real_query($sql);
			$res = $connect->use_result();
			while($row = $res->fetch_assoc()){
				echo '<option value="'.$row['numeboit'].'">'.$row['numeboit'].'</option>';
			}
		}else{
			return false;
		}
        
    }
    
    function getReadyToExport(){
        echo'<script type="text/javascript" src="../assets/js/tableExport.js"></script>
            <script type="text/javascript" src="../assets/js/jquery.base64.js"></script>
            <script type="text/javascript" src="../assets/js/libs/base64.js"></script>
            <script type="text/javascript" src="../assets/js/libs/sprintf.js"></script>
            <script type="text/javascript" src="../assets/js/jspdf.js"></script>
            <script type="text/javascript">function toExcel(){$("#theTable").tableExport({type:"excel",escape:"false",tableName:"Resultat",ignoreColumn: [2,3]});}</script>
            <script type="text/javascript">function toPDF(){$("#theTable").tableExport({type:"pdf",escape:"false",tableName:"Resultat",ignoreColumn: [2,3],pdfFontSize:"14"});}</script>';
    }