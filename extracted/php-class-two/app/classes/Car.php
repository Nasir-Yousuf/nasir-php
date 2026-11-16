<?php

namespace App\classes; 

class Car
{
    public $color, $model, $name; 

    public function __construct()
    {
        $this->color = "Red"; 
        $this->model = "2022"; 
        $this->name = "Axios - Hybrid"; 
    }

    public function getName()
    {
        echo $this->name; 
    }

    public function getModel () 
    {
        echo $this->model; 
    }

    public function getColor()
    {
        echo $this->color; 
    }

    public function allInfo(){
        echo "Car name : ".$this->name."<br/>"; 
        echo "Car model : ".$this->model."<br/>"; 
        echo "Car color : ".$this->model."<br/>"; 
    }
}