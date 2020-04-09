<?php
/**
* Created by Joshua Santos.
* License: MIT (?)
* Date: March 22, 2019
*
*/
include 'header.php';
?>


<body>


<div style="width:100%; text-align:center">


    <h4>Go To Model</h4>
    <button id="goToModel" type="button" class="btn btn-primary btn-lg btn-block">Go To Home</button>
    <script>
        $("#goToModel").click(function(){
            window.location.href ="/model/";
        });
    </script>

</div>
<script src="js/Chart.min.js"></script>
<script type="text/javascript" src="js/vis-graph3d.min.js"></script>
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

<script src="js/vis-b.min.js"></script>
</body>

</html>

