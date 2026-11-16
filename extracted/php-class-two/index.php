<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\classes\HelloWorld; 
// use App\classes\NewClass; 
use App\classes\Car; 

$helloWorld = new HelloWorld(); 
$helloWorld->index(); 
$helloWorld->about(); 
$helloWorld->contact(); 
$helloWorld->login(); 



// test(); 


// $helloWorld->practice(); 
// $Nasir  = new NewClass; 
// $Nasir->name(); 
// $Nasir->age(); 
// $Nasir->profession(); 