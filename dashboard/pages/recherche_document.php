<script type="text/javascript">
$(document).ready(function (e) {
	$("#searcher").on('submit',(function(e) {
		e.preventDefault();
                $url = "do/recherch_document.php?nomf="+this;
		$.ajax({
        	url: $url,
			type: "GET",
			data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			success: function(data)
		    {
			$("#iddivcont").html(data);
		    },
		  	error: function() 
	    	{
	    	} 	        
	   });
	}));
});
</script>
<div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Rechercher des documents</h3>
                    </div>
                    <div class="box-body">
                        <div class="box-tools">
                            <form name="form" action="" method="GET" id="searcher">
                            <div class="input-group">
                              <input name="search" id="nomf" class="form-control pull-right" placeholder="Nom du document" type="text"/>
                              <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit" onclick="rechercher_fichier();"><i class="fa fa-search"></i></button>
                              </div>
                            </div>
                            </form>
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
                    <div class="box-body" id="result">
                      <table class="table table-bordered table-hover bg-info table-striped" id="theTable">
                          <thead>
                                <tr>
                                    <th width="20%">Numero</th>
                                    <th>Nom du document</th>
                                    <th width="20%">Afficher</th>
                                </tr>
                          </thead>
                            <tbody align="center" id="iddivcont">
                                <!--<tr>
                                  <td>31</td>
                                  <td>30A790100_31.PDF</td>
                                  <td><a href="#" target="_blank"><i class="fa fa-download"></i></a></td>
                                </tr>-->
                                <tr><td colspan="3"><p class="text-center help-block">Tapez une indice sur la zone de la recherche.</p></td></tr>
                            </tbody>
                      </table>
                    </div>
                </div>
              </div>
</div>