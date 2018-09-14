<div class="row">
    <div class="col-md-8">
        <div class="box box-primary">
            <div class="box-header with-border ">
                <h3 class="box-title">Charger documents</h3>
            </div>
            <div class="box-body text-center" id="result">
                <table class="table table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <th width="10%">#</th>
                            <th>CIN</th>
                            <th>Boite</th>
                        </tr>
                    </thead>
                        <tbody align="center" id="iddivcont">
                            <?= loadScanDirIntoTable('../scan'); ?>
                            <!-- <tr><td colspan="3"><p class="text-success">Click sur charger...</p></td></tr> -->
                        </tbody>
                </table> 
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
        <div class="form-group">
            <button class="btn btn-primary btn-block" onclick="uploadAll();">Charger tous les documents</button>
        </div>
    </div>
</div>

<script>
    function uploadAll()
    {
        $.ajax({
            url: "do/uploadAllDocuments.php",
            method: "GET",
            success: function(data){
                $("#result").html(data);
            }
        });
    }
</script>