<!doctype html>
<?php
include '../header.php';
?>
<style>
    #custom-handle {
        width: 5em;
        height: 3em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }
    #transmissibility-handle {
        width: 5em;
        height: 3em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }
    #movementspd-handle{
        width: 5em;
        height: 3em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }
    #shelter-handle{
        width: 5em;
        height: 3em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }
    #radius-handle{
        width: 5em;
        height: 3em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }
    #infectionTime-handle{
        width: 5em;
        height: 3em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }
</style>
<body>
<script src="../js/Chart.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<button id="runsimulation" class="btn btn-outline-primary btn-lg">RESET SIMULATION</button>
<hr>
<p class="h6">Bounce on/off | <input id="isBounce" type="checkbox" checked data-toggle="toggle" data-size="lg" ></p>
<hr>


<p class="h6">
    <label for="amount">Total Healthy Population</label>
    <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;"> (Mobile: tap slide bars to move slider)
</p>
<div id="slider-range-min">
    <div id="custom-handle" class="ui-slider-handle"></div>
</div>
<hr>


<p class="h6">
    <label for="transmissibility">Transmissibility</label>
    <input type="text" id="transmissibility-label" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="transmissibility">
    <div id="transmissibility-handle" class="ui-slider-handle"></div>
</div>
<hr>

<p class="h6">
    <label for="movementspd">Social Speed</label>
    <input type="text" id="movementspd-label" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="movementspd">
    <div id="movementspd-handle" class="ui-slider-handle"></div>
</div>
<hr>


<p class="h6">
    <label for="shelter">% Shelter In Place</label>
    <input type="text" id="shelter-label" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="shelter">
    <div id="shelter-handle" class="ui-slider-handle"></div>
</div>
<hr>

<p class="h6">
    <label for="radius">Infection Radius</label>
    <input type="text" id="radius-label" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="radius">
    <div id="radius-handle" class="ui-slider-handle"></div>
</div>
<hr>

<p class="h6">
    <label for="infectionTime">Infection Time (epochs)</label>
    <input type="text" id="infectionTime-label" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="infectionTime">
    <div id="infectionTime-handle" class="ui-slider-handle"></div>
</div>
<hr>



<div style="width:700px;">
    <canvas id="canvas"></canvas>
</div>
<script src="../js/pixi.min.js"></script>
<script src="../js/model.min.js"></script>

</body>


