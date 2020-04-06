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
</style>
<body>
<script src="../js/Chart.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<button id="runsimulation" class="btn btn-outline-primary btn-lg">RESET SIMULATION</button>
<p>
    <label for="amount">Total Healthy Population</label>
    <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
<div id="slider-range-min">
    <div id="custom-handle" class="ui-slider-handle"></div>
</div>
<div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div>
<div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div>
<div class="form-group">
<script src="../js/pixi.min.js"></script>
<script src="../js/model.min.js"></script>
    <div style="width:700px;">
        <canvas id="canvas"></canvas>
    </div>
    <script>
        $( function() {
            var handle = $( "#custom-handle" );
            $( "#slider-range-min" ).slider({
                range: "min",
                value: 200,
                min: 50,
                max: 300,
                create: function() {
                    handle.text( $( this ).slider( "value" ) );
                },
                slide: function( event, ui ) {
                    $( "#amount" ).val( ui.value );
                    handle.text( ui.value );
                }
            });
            $( "#amount" ).val(  + $( "#slider-range-min" ).slider( "value" ) );
        } );
    </script>
</body>


