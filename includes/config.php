<?php  
function theCurrentUrl(){
    $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    echo  $actual_link;
}
function theDomainUrl(){
    $domain = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[SERVER_NAME]";
    echo  $domain;
}

function theVersion(){
    date_default_timezone_set("America/Lima");
    $version =  date('Y').date('m').date('j').date('H').date('i').date('s').gettimeofday()['usec']; 
    return $version;
}

?>