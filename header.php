<?php
?>
<!doctype html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
    <script src="js/Chart.min.js"></script>
    <title>COVID19</title>
    <link rel="shortcut icon" type="image/x-icon" href="https://argylefoxinc.com/functions/modules/argylefox/images/favicon.ico" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161235927-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-161235927-2');
    </script>

    <style>
        body {font: 10pt arial;}
    </style>

    <script type="text/javascript" src="js/vis-graph3d.min.js"></script>

    <script type="text/javascript">
    </script>
    <!--script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.js"></script-->
</head>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><span class="text-danger">COVID-19</span> Data Tracking/Analysis</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">Main Data Tracker <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href=/model/>Model</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Authors
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="mailto:jsantos@argylefoxinc.com">Josh Santos</a>
                    <a class="dropdown-item" href="https://rizaraquel.com">Riza Santos</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="https://argylefoxinc.com">Argyle Fox</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Git Repository</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    DATA SOURCES
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <p class="h6">Collected every 6 hours from:</p>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-primary">
                            <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html"><p class="h4">Health Canada</p></a>
                        </li>
                        <li class="list-group-item list-group-item-secondary">
                            <a href="https://www.worldometers.info/coronavirus/"><p class="h4">Worldometer</p></a>
                        </li>
                        <li class="list-group-item list-group-item-primary">
                            <a href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html"><p class="h4">CDC</p></a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</nav>