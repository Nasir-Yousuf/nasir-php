<?php

namespace App\classes; 

use App\classes\Car; 

class HelloWorld
{
    public $message, $location, $city, $data = [], $students = [];  // Property declaring. 

    public function __construct() // Magic Method
    {
        $this->message = "Hello World"; // Value Assiging
        $this->location = "Savar"; 
        $this->city = "Dhaka"; 
    }

    public function index()   // Normal Method
    {
        $this->students = [
            0 => [
                "id" => 01, 
                "name" => "Borno", 
                "email" => "borno@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Dhaka"
            ], 
            1 => [      
                "id" => 02, 
                "name" => "Patwari", 
                "email" => "patwari@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Sirajgonj" ,
                "hobby" => "standup"
            ],
            2 => [
                "id" => 03, 
                "name" => "Golam", 
                "email" => "golam@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Chittagonj"
            ], 

            3 => [
                "id" => 40, 
                "name" => "Golam", 
                "email" => "golam@gmail.com",
                "mobile" => '0181818188', 
                "address" => "Chittagong"
            ], 
        ]; 

        return view("home", ["students" => $this->students]); 

        // $students  = $this->students; 
        // include "views/home.php"; 

        // print_r($this->students); 

        // Printing student information:
        // foreach ($this->students as $index =>  $student) {
        //     foreach($student as $item) {
        //       echo $item." "; 
        //     }
        //     echo "<br/>"; 
        // }
    }

    public function about()
    {
      return view("about"); 
    }

    
    public function contact()
    {
      return view("contact"); 
    }


    public function login()
    {
      return view("login"); 
    }
}