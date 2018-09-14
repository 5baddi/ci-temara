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
            if($extension == "pdf"){
                if($nomtir == 1){
                $filpdf = explode("_", $Entry);
                $numboite = explode(".", $filpdf[1]);
                //$pieces = explode("..", $targetPath);
				echo'
				<table class="table table-bordered table-hover">
					<thead>
                        <tr>
							<th>CIN</th>
                            <th>Nom du document</th>
							<th>Boite</th>
                        </tr>
                    </thead>
					<tbody align="center">
						<tr>
                            <td>'.$filpdf[0].'</td>
                            <td>'.$Entry.'</td>
                            <td>'.$numboite[0].'</td>
                        </tr>
						<tr>
							<td colspan="3">
								<button class="btn btn-success btn-sm" onclick="uploader();" type="button"><i class="fa fa-check"></i>&nbsp;Ajouter</button>
								<a href="" class="btn btn-danger btn-sm" type="button"><i class="fa fa-trash"></i>&nbsp;Annuler</a>
							</td>
						</tr>
					</tbody>
				</table>
				';
                }else{
                    echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">Nom de fichier non valide .</br>Il doit être sous forme (CIN_Numerodeboite ex : AX1125_156).</p>';  
                }
            }else{
                echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">'.$Entry.' Type de fichier non valide!</p>';
            }
        }else{
            echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">'.$Entry.' Fichier déjâ charger!</p>';
        }
    }else{
        echo'<i class="fa fa-4x fa-exclamation-triangle text-danger"></i><p class="text-danger">Pas du document...</p>';
    }