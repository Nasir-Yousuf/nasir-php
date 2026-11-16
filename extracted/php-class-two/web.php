<?php

require_once "vendor/autoload.php"; 

use App\classes\HelloWorld; 

$helloWorld = new HelloWorld(); 

if (isset($_GET['page'])) {
    if ($_GET['page'] == "home") {
        $helloWorld->index(); 
    } elseif ($_GET['page'] == 'about') {
        $helloWorld->about(); 
    } elseif ($_GET['page'] == 'contact') {
        $helloWorld->contact(); 
    } elseif ($_GET['page'] == "login") {
        $helloWorld->login(); 
    }
} else {
    $helloWorld->index(); 
}
