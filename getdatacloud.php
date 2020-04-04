<?php
/**
 * Created by Joshua Santos.
 * License: MIT (?)
 * Date: March 21, 2019
 *
 */

define('ABSPATH', '/var/www/somerandom.co/wp-content/uploads/plotterlogs/');

// Data Sources :D // Chron'd every 6 hours on ubuntu
$dataSources = array(
    "worldometers" => "https://www.worldometers.info/coronavirus/",
    "healthCanada" => "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html",
    "CDC" => "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html"
);

//Borrow Datas :D Store For Treatments =]
foreach($dataSources as $name => $url){
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    $output = curl_exec($curl);

    $filename = ABSPATH.date("Y-m-d-H").'_'.$name.'.txt';
    $fp = fopen($filename, 'w');
    file_put_contents($filename, "");
    fwrite($fp, $output);
    fclose($fp);
    curl_close($curl);
}

?>