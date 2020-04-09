<?php
include 'header.php';
?>
<div style="width:100%; text-align:center">


    <h1>404 error not found.</h1>
    <button id="goToHome" type="button" class="btn btn-primary btn-lg btn-block">Go To Home</button>
    <script>
        $("#goToHome").click(function(){
            window.location.href ="/";
        });
    </script>

</div>