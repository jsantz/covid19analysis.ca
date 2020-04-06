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
</style>
<body>
<script src="../js/Chart.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<button id="runsimulation" class="btn btn-outline-primary btn-lg">RESET SIMULATION</button>
<hr>


<p class="h6">
    <label for="amount">Total Healthy Population</label>
    <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">| (double tap slidebars to set values)
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
                max: 400,
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
        $( function() {
            var handle = $( "#transmissibility-handle" );
            $( "#transmissibility" ).slider({
                range: "min",
                value: 20,
                min: 1,
                max: 100,
                create: function() {
                    handle.text( $( this ).slider( "value" ) );
                },
                slide: function( event, ui ) {
                    $( "#transmissibility-label" ).val('% ' + ui.value );
                    handle.text('%' + ui.value );
                }
            });
            $( "#transmissibility-label" ).val('% '  + $( "#transmissibility" ).slider( "value" ) );
        } );
    </script>
</body>


