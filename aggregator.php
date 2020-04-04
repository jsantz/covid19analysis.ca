
    <?php

    /**
     * Created by Joshua Santos.
     * License: MIT (?)
     * Date: March 22, 2019
     *
     */

    define( 'LOGPATH', '../wp-content/uploads/plotterlogs' );
    // MAIN

    $worldOmeters = array();
    $healthCanada = array();

    //Get the list of files in the directory
    $row=0;
    $healthCanada2 = [];

    if (($handle = fopen(LOGPATH . "/summaryCanada.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $num = count($data);
            //echo "<p> $num fields in line $row: <br /></p>\n";
            $row++;
            $healthCanada2[$row] = $data;
            /*for ($c=0; $c < $num; $c++) {
                echo $data[$c] . "<br />\n";
            }*/
        }
        fclose($handle);
    }
    if ($handle = opendir(LOGPATH)) {
        $i=0;
        $j=0;
        while (false !== ($entry = readdir($handle))) {
            if ($entry != '.' && $entry != '..') {
                $fileContext = explode('_', $entry);
                if (count($fileContext) == 2 && $entry != '.DS_Store') {

                    switch ($fileContext[1]) {
                        case 'worldometers.txt':
                            $worldOmeters[$i] = array('date' => date("Y-m-d-H", filectime(LOGPATH . '/' . $entry)), 'file' => $entry);
                            $i++;
                            break;
                        case 'healthCanada.txt':
                            $healthCanada[$j] = array('date' => date("Y-m-d-H", filectime(LOGPATH . '/' . $entry)), 'file' => $entry);
                            $j++;
                            break;
                    }
                }
            }
        }


        orderDataByDate($worldOmeters);
        orderDataByDate($healthCanada);

        getContents($worldOmeters);
        getContents($healthCanada);

        getTables($worldOmeters);
        getTables($healthCanada);



        unsetContents($worldOmeters);
        unsetContents($healthCanada);

        $AllData = (object)array(
            "worldoMeters" => $worldOmeters,
            "healthCanada" => $healthCanada,
            "healthCanadaTables"=>$healthCanada2
        );

        $jsonVersion = json_encode($AllData, JSON_PRETTY_PRINT);
        echo $jsonVersion;
        closedir($handle);
    }

    function orderDataByDate(&$fileSet){
        $tempFileSet = array();
        $holder = null;
        $temp = array();
        $i=0;
        foreach($fileSet as $file){
            $min = strtotime("2040-03-22");
            foreach($fileSet as $file2){
                $temp1 = explode("-", $file2['date']);
                $date = $temp1[0] .'-'.  $temp1[1] .'-'. $temp1[2] .'T'. $temp1[3] .':00:00';
                $testDate = strtotime($date);
                if(($testDate < $min) && !(in_array($file2, $temp)) ){
                    $min = $testDate;
                    $holder = $file2;
                    $i++;
                }
            }
            array_push($temp, $holder);
        }
        $fileSet = $temp;
    }

    function unsetContents(&$fileArray){
        foreach($fileArray as &$file){
            unset($file['contents']);
            unset($file['tables']);
        }
    }

    function getContents(&$files){
        foreach($files as &$item){
            $file = file_get_contents(LOGPATH.'/'.$item['file']);
            $item['contents'] =trim($file);
        }
    }

    function getTables(&$files){
        foreach($files as &$file){
            $temp = array();
            $i=0;
            do{
                $subString = getStringBetween($file['contents'], '<table', '</table>');
                if(strlen($subString)!=0){
                    $subString = '<table'.$subString.'</table>';

                    $temp[$i] = $subString;
                    $file['contents']=str_replace($subString, '', $file['contents']);
                    $file['alldata']=extractDataFromTable($subString);
                    //echo 'date: ' .$file['date'] . '<br>date: ' . $file['file'] . '<br>' . json_encode(extractDataFromTable($subString), JSON_PRETTY_PRINT) . '<br>';
                }$test = strpos($subString, "<table");
            }while($test);
            $file['tables']=$temp;
        }
    }

    function extractDataFromTable(&$tableString){
        $tempTableString = $tableString;

        // 1. Remove Table Tags.
        removeTag($tempTableString, '<table>', '</table>');
        // Get Header.
        $subString=getStringBetween($tableString, '<thead', '</thead>');
        $tempTableString = trim(str_replace("<thead". $subString. "</thead>", "",  $tempTableString));
        $thead = extractTag('<thead'. $subString. '</thead>', '<thead>', '</thead>');
        $headerElements = getRow($thead);

        //Get The body
        $bodyData = array();
        $i=0;
        //do{
            $bodyString = getStringBetween($tempTableString, "<tbody", "</tbody>");
            $bodyString = '<tbody'.$bodyString.'</tbody>';
            $bodyDataTable = getRows($bodyString);
            $bodyData[$i] = $bodyDataTable;
            $tempTableString = str_replace($bodyString, '', $tempTableString);
            $test = strpos($tempTableString, "tbody");
            $i++;
        //}while($test);

        $tableData = (object)array(
            "header" => $headerElements,
            "body" => $bodyDataTable
        );

        return $tableData;
    }

    function getRows($tbody){
        $rowDatas = array();
        $rows = explode('</tr>', $tbody);
        $i=0;
        foreach($rows as $row){
            $rowDatas[$i] = getRow($row. '</tr>');
            $i++;
        }
        return $rowDatas;
    }

    function getRow($row){
        removeTag($row, '<tr>', '</tr>');
        $rowElements = explode('</td>', $row);
        if(sizeof($rowElements)==1){
            $rowElements = explode('</th>', $row);
        }
        foreach($rowElements as &$element){
            $strPos = strpos($element, '>');
            $element = trim(strip_tags(substr($element, $strPos+1, strlen($element))));
        }
        return $rowElements;
    }

    function removeTag(&$string, $frontTag, $endTag){
        $frontTag1 = substr($frontTag, 0, -1);
        $subString=getStringBetween($string, $frontTag1, $endTag);
        $frontClose = strpos( $subString, '>');
        $string = trim(substr($string, strlen($frontTag1) + $frontClose + 1, 0 - strlen($endTag)));
        return trim(substr($subString, $frontClose+1, strlen($subString)));
    }

    function extractTag($string, $frontTag, $endTag){
        $frontTag1 = substr($frontTag, 0, -1);
        $subString=getStringBetween($string, $frontTag1, $endTag);
        $frontClose = strpos( $subString, '>');
        return trim(substr($subString, $frontClose+1, strlen($subString)));
    }

    function getStringBetween($string, $start, $end){
        $string = ' ' . $string;
        $ini = strpos($string, $start);
        if ($ini == 0) return '';
        $ini += strlen($start);
        $len = strpos($string, $end, $ini) - $ini;
        return substr($string, $ini, $len);
    }

    ?>
