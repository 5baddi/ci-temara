<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>CI Application</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="assets/css/own.css">
  <link rel="icon" type="image/png" href="assets/favicon.png"/>
  
  <script src="assets/js/jquery.min.js" type="text/javascript"></script>
  <script src="assets/js/schema.js" type="text/javascript"></script> 
  <script src="assets/js/jspdf.js" type="text/javascript"></script>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<!-- for white color add class light like skin-blue-light or for black remove light class -->
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
  <header class="main-header">
    <a href="index.php" class="logo">
      <span class="logo-mini">CI</span>
      <span class="logo-lg">CI Temara</span>
    </a>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Menu</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <div class="navbar-custom-menu">
          <ul class="nav navbar-nav subTitle titles">
              <span>Gestion documentaire des permies de conduite</span>
          </ul>
      </div>
	</nav>
  </header>
  <aside class="main-sidebar">
    <section class="sidebar">
        <div class="image">
            <img src="assets/img/CI-Temara.png" class="img-responsive" alt="User Image">
        </div>
        <ul class="sidebar-menu">
            <li class="header">Menu</li>
            <li class="treeview <?= isset($menu[0]) ? $menu[0] : null ; ?>">
                <a href="?action=recherche_document"><i class="fa fa-search"></i><span>Recherche document</span></a>
            </li>
            <li class="treeview <?= isset($menu[5]) ? $menu[5] : null ; ?>">
                <a href="?action=ajouter_document"><i class="fa fa-upload"></i><span>Ajouter document</span></a>
            </li>
            <li class="treeview <?= isset($menu[2]) ? $menu[2] : null ; ?>">
                <a href="#">
                    <i class="fa fa-list-alt"></i><span>Liste CIN / Boite</span>
                    <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                </a>
                <ul class="treeview-menu">
                    <li class="<?= isset($menu[3]) ? $menu[3] : null ; ?>"><a href="?action=liste_cin_boite"><i class="fa fa-bar-chart-o"></i>&nbsp;par Boite</a></li>
                    <li class="<?= isset($menu[4]) ? $menu[4] : null ; ?>"><a href="?action=liste_cin_alphabetique"><i class="fa fa-table"></i>&nbsp;par Alphabétique</a></li>
                </ul>
            </li>
            <li class="treeview <?= isset($menu[1]) ? $menu[1] : null ; ?>">
                <a href="?action=charger_documents"><i class="fa fa-file-pdf-o"></i><span>Charger documents</span></a>
            </li>
        </ul>
    </section>
  </aside>
    <div class="content-wrapper">
          <section class="content">