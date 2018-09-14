<script type="text/javascript">
    $(document).ready(function(){
        $(document).on('change', '#doc', function(){
            var form_data = new FormData();
            form_data.append("doc", document.getElementById('doc').files[0]);
            $.ajax({
             url: "do/checkUpload.php",
             method: "POST",
             data: form_data,
             contentType: false,
             cache: false,
             processData: false,
             beforeSend: function(){
                $('#iddivcont').html('<p class="help-block"><i class="fa fa-spinner fa-spin"></i>&nbsp;En cours d\'ajouter la document.</p>');
             },  
             success: function(data)
             {
				$('#iddivcont').html("");
                $('#iddivcont').html(data);
             }
            });
        });
    });
</script>
<div class="row">
              <div class="col-md-8 col-md-offset-2">
                  <div class="box box-primary">
                      <div class="box-header with-border">
                          <h3 class="box-title">Ajouter un document</h3>
                      </div>
                      <div class="box-body">
                            <form method="POST" enctype="multipart/form-data" id="uploadForm">
                                <div class="form-group" style="overflow:hidden;position:relative;">
                                    <label for="filer" class="help-block text-sm">Sélectionnez un document</label>
                                    <div class="btn btn-block btn-default btn-file">
                                        <i class="fa fa-file-pdf-o"></i>&nbsp;Sélectionnez un document
                                        <input type="file" name="doc" id="doc" accept=".pdf"/>
                                    </div>
                                    </div>
                            </form>
                      </div>
                  </div>
              </div>
              <div class="col-md-8 col-md-offset-2">
                  <div class="box box-primary">
                      <div class="box-header with-border">
                          <h3 class="box-title">Résultat</h3>
                      </div>
                      <div class="box-body">
                          <div class="text-center" id="iddivcont">
                              <i class="fa fa-4x fa-file-pdf-o text-success"></i>
                              <p class="text-success">Sélectionnez un document</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>