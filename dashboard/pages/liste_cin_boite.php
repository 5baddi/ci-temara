<div class="row">
         <div class="col-md-8 col-md-offset-2">
                <div class="box box-primary">
                    <div class="box-header with-border">
                          <h3 class="box-title">Liste CIN par Boite</h3>
                    </div>
                     <div class="box-body">
                          <div class="box-tools">
                              <div class="input-group">
                                  <input type="text" class="form-control pull-right" id="boite" onkeypress="return ((event.which >= 48 && event.which <= 57) || event.which == 8 || event.keyCode == 46);" list="boiteList" placeholder="Numero de la boite..."/>
                                  <datalist id="boiteList" aria-hidden="true">
                                      <?php numBoite(); ?>
                                  </datalist>
                                  <div class="input-group-btn">
                                      <button class="btn btn-default" onclick="rech_fichier_par_boite();"><i class="fa fa-search"></i></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
<div class="col-md-8 col-md-offset-2">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">Résultat</h3>
                <div class="box-tools">
                    <div class="btn-group">
                        <button type="button" class="btn btn-twitter dropdown-toggle downtoggle" data-toggle="dropdown">
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu downdown" role="menu">
                            <li><a href="#" title="Exporter vers pdf" onClick ="toPDF();"><i class="fa fa-file-pdf-o text-danger"></i></a></li>
                            <li><a href="#" title="Exporter vers excel" onclick="toExcel();"><i class="fa fa-file-excel-o text-success"></i></a></li>
                        </ul>
                    </div>
                    <!--<div class="input-group">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-xs btn-success btn-flat" title="Exporter vers pdf" onClick ="toPDF();"><i class="fa fa-2x fa-file-pdf-o"></i></button>
                            <button type="button" class="btn btn-xs btn-success btn-flat" title="Exporter vers excel" onclick="toExcel();"><i class="fa fa-2x fa-file-excel-o"></i></button>
                        </div>
                    </div>-->
                </div>
            </div>
            <div class="box-body">
                <table class="table table-bordered table-hover bg-info table-striped" id="theTable">
                    <thead>
                            <tr>
                                <th>N°</th>
                                <th>Nom du document</th>
                                <th>Telecharger</th>
                            </tr>
                    </thead>
                        <tbody align="center" id="iddivcont">
                            <tr><td colspan="3"><p class="text-center help-block">Tapez un numero d'une boite pour la recherche.</p></td></tr>
                        </tbody>
                </table>     
            </div>
        </div>
    </div>
</div>