<?php

namespace App\Classes;


class NewClass
{
    public $name, $age, $profession;

    public function __construct() {
        $this->$name = "Nasir"; 
        $this->$age = 21; 
        $this->$profession; 
    }

    public function name(){
        echo "Nasir"; 
    }
    public function age(){
        echo 21; 
    }
    public function profession(){
        echo "Web Developer"; 
    }
}