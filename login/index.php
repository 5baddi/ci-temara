<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CI Temara: s'identifier</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="icon" type="image/png" href="../assets/favicon.png"/>
    <link rel="stylesheet" href="../assets/css/own.css"/>
    <style>
        body{
            background-image: url(../assets/img/asanoha.png) !important;
            background-attachment: fixed;
            background-position: center center;
        }
    </style>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
     </head>
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="<?= $_SERVER['PHP_SELF'] ?>"><b>CI</b>Temara</a>
            </div>
            <!-- /.login-logo -->
            <div class="login-box-body text-center">
                <p class="login-box-msg">S'identifier</p>
                <form action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" placeholder="Email">
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="form-group col-sm-12">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">Se connecter</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <hr/>
                <a href="/login/reset.php">J'ai oublié mon mot de passe</a><br>
            </div>
            <!-- /.login-box-body -->
        </div>
        <!-- /.login-box -->

        <!-- jQuery 3 -->
        <script src="../assets/js/jquery.min.js"></script>
        <!-- Bootstrap 3.3.7 -->
        <script src="../assets/js/bootstrap.min.js"></script>
    </body>
</html>
