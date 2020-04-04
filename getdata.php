<?php

/**
 * Created by Joshua Santos.
 * License: MIT (idk?)
 * Date: March 21, 2020
 *
 */


define('ABSPATH', '/var/www/somerandom.co/wp-content/uploads/plotterlogs/');
;
// Data Sources :D // Chron'd every 6 hours on ubuntu
$dataSources = array(
    "worldometers" => "https://www.worldometers.info/coronavirus/",
    "healthCanada" => "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html"
);

//Borrow Datas :D Store For Treatments =]
foreach($dataSources as $name => $url){
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    $output = curl_exec($curl);

    $filename = '../wp-content/uploads/plotterlogs/'.date("Y-m-d-H").'_'.$name.'.txt';
    $fp = fopen($filename, 'w');
    file_put_contents($filename, "");
    fwrite($fp, $output);
    fclose($fp);
    curl_close($curl);
}

?>