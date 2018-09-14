<?php
    session_start();
    
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $email = isset($_POST['ci-email']) ? strip_tags($_POST['ci-email']) : null;
        $pass = isset($_POST['ci-pass']) ? strip_tags($_POST['ci-pass']) : null;

        $error = "";
        if(!empty($email) && !empty($pass)){
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                require_once '../dashboard/config.php';
                $db = connect();

                $result = $db->query("SELECT * FROM utilisateur WHERE email = '{$email}'");
                if($result->num_rows == 1){
                    $user = $result->fetch_object();
                    if(password_verify($pass, $user->password)){
                        $loggedAt = date('Y-m-d h:i:s');
                        $db->query("UPDATE utilisateur SET loggedAt = '{$loggedAt}' WHERE id = '{$user->id}'");

                        $_SESSION['ci_id'] = $user->id;
                        $_SESSION['ci_fullname'] = $user->fullname;
                        $_SESSION['ci_last_log'] = $loggedAt;

                        header('Location: ../dashboard');
                    }else{
                        $error = "le mot de passe entré est incorrect";
                    }
                }else{
                    $error = "s'il vous plaît assurez-vous d'entrer les informations correctes";
                }
            }else{
                $error = "s'il vous plaît assurez-vous d'entrer le bon email";
            }
        }else{
            $error = "s'il vous plaît assurez-vous de remplir tous les champs";
        }
    }
?>

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
                        <input name="ci-email" type="email" class="form-control" placeholder="Aresse e-mail">
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input name="ci-pass" type="password" class="form-control" placeholder="Mot de passe">
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
                <?php if(isset($error)): ?>
                <p class="text-danger"><?= $error ?></p>
                <?php endif; ?>
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
