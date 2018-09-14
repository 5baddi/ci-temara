<div class="row">
              <div class="col-md-8">
                <div class="box box-primary">
                    <div class="box-header with-border ">
                        <h3 class="box-title">Charger documents</h3>
                    </div>
                    <div class="box-body text-center">
                        <table class="table table-bordered table-hover">
                            <thead>
                                  <tr>
                                      <th width="10%">#</th>
                                      <th>Nom du document</th>
                                      <th>Boite</th>
                                  </tr>
                            </thead>
                              <tbody align="center" id="iddivcont">
                                  <tr><td colspan="3"><p class="text-success">Click sur charger...</p></td></tr>
                                  <!--<tr>
                                    <td>31</td>
                                    <td>30A790100_31.PDF</td>
                                  </tr>
                                  <tr><td colspan="3"><p class="text-center text-danger">Aucun résultat</p></td></tr>-->
                              </tbody>
                        </table> 
                    </div>
                    <div class="box-footer" >
                        <button class="btn btn-danger btn-block" onclick="charger_fichier();">Charger</button>
                    </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="info-box">
                    <span class="info-box-icon bg-teal"><i class="fa fa-files-o"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text">Fichier suavegarder</span>
                    <span class="info-box-number"><?= count_files("../scan/"); ?> fichiers </span>
                  </div>
                </div>
              </div>
</div>