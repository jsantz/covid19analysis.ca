<?php
/**
* Created by Joshua Santos.
* License: MIT (?)
* Date: March 22, 2019
*
*/
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

    <style>
        body {font: 10pt arial;}
    </style>

    <script type="text/javascript" src="js/vis-graph3d.min.js"></script>

    <script type="text/javascript">
    </script>
    <!--script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.js"></script-->
</head>

<body>
<h1 class="display-4"><span class="text-danger">COVID-19</span> Data Tracking/Analysis</h1>
<h4><span class="text-success">(Work in Progress)</span></h4>
<p class="h4">Collected every 6 hours from:</p>
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
<h6>
    <p class="h6">email me if you'd like to get involved. <a href="mailto:jsantos@argylefoxinc.com">jsantos@argylefoxinc.com</a></p>.
</h6>

<hr>
<div id="mygraph2"></div>
<div id="info2"></div>
<div style="width:100%;">
    <canvas id="canvas"></canvas>
</div>
<hr>
<div style="width:100%;">
    <canvas id="canvas2"></canvas>
</div>
<div style="width:100%;">
    <canvas id="canvas6"></canvas>
</div>
<div style="width:100%;">
    <canvas id="canvas7"></canvas>
</div>
<hr>
<div style="width:100%;">
    <canvas id="canvas3"></canvas>
</div>
<hr>
<div style="width:100%;">
    <canvas id="canvas4"></canvas>
</div>
<hr>
<div style="width:100%;">
    <canvas id="canvas5"></canvas>
</div>
<!--p>
    <label for="style"> Style:
        <select id="style">
            <option value="bar">bar</option>
            <option value="bar-color">bar-color</option>
            <option value="bar-size">bar-size</option>

            <option value="dot">dot</option>
            <option value="dot-line">dot-line</option>
            <option value="dot-color">dot-color</option>
            <option value="dot-size">dot-size</option>

            <option value="grid">grid</option>
            <option value="line">line</option>
            <option value="surface">surface</option>
        </select>
    </label>
</p-->


<p>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#allData" aria-expanded="false" aria-controls="collapseExample">
         View All Data in JSON Format
    </button>
</p>
<pre>
<div class="collapse" id="allData">

<?php
include 'aggregator.php';
?>
</div>
</pre>
<div id="mygraph"></div>
<div id="info"></div>

<script src="js/main.js"></script>
</body>

</html>

