<?php
class Pessoa
{
    private $name;
    private $cpf;
    private $income;
    private $aliquot;
    private $allotment;

    public function __construct($name, $cpf, $income){
        $this->name = $name;
        $this->cpf = $cpf;
        $this->income = $income;
    }

    public function getName(){
        return $this->name;
    }

    public function getCPF(){
        return $this->cpf;
    }

    public function getIncome(){
        return $this->income;
    }

    public function getAliquot(){
        return $this->aliquot;
    }

    public function getAllotment(){
        return $this->allotment;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function setCPF($cpf){
        $this->cpf = $cpf;
    }

    public function setIncome($income){
        $this->income =  $income;
    }

    public function setAliquot($aliquot){
        $this->aliquot = $aliquot;
    }

    public function setAllotment($allotment){
        $this->allotment = $allotment;
    }

    public function calculateTax() {
        if ($this->income <= 22847.76){
            $this->aliquot = "Exempted";
        }else if ($this->income >= 22847.76 && $this->income <= 33919.80){
            $this->aliquot = "7.5";
        }else if ($this->income >= 33919.80 && $this->income <=45012.60){
            $this->aliquot = "15";
        }else if ($this->income >= 45012.60 && $this->income <= 55976.16){
            $this->aliquot = "22.5";
        }else if ($this->income > 55976.16){
            $this->aliquot = "27.5";
        }
    }

    public function calculateAllotment(){
        if($this->aliquot == "Exempted"){
        $this->allotment = "Exempted";
        }else{
            $this->allotment = $this->income * ($this->aliquot / 100);
            $this->allotment = "R$".number_format($this->allotment, 2, '.', '');
        }
    }

    public function isValidCpf(){
        $sum = 0;
        $rest;
        $i;
        $cpf = $this->cpf;
        // Remove all non-digit characters
        $cpf = preg_replace('/[^0-9]/', '', $cpf);

        //valid cpf
        if($cpf == "00000000000" || $cpf == "11111111111" || $cpf == "22222222222" || $cpf == "33333333333" || $cpf == "44444444444" || $cpf == "55555555555" || $cpf == "66666666666" || $cpf == "77777777777" || $cpf == "88888888888" || $cpf == "99999999999"){
            return false;
        }

        //valid first digit
        for($i = 1; $i <= 9; $i++){
            $sum = $sum + intval(substr($cpf, $i-1, 1)) * (11 - $i);
        }
        $rest = ($sum * 10) % 11;
        if(($rest == 10) || ($rest == 11)){
            $rest = 0;
        }
        if($rest != intval(substr($cpf, 9, 1))){
            return false;
        }

        //valid second digit
        $sum = 0;
        for($i = 1; $i <= 10; $i++){
            $sum = $sum + intval(substr($cpf, $i-1, 1)) * (12 - $i);
        }
        $rest = ($sum * 10) % 11;
        if(($rest == 10) || ($rest == 11)){
            $rest = 0;
        }
        if($rest != intval(substr($cpf, 10, 1))){
            return false;
        }

        return true;
    }
}

?>