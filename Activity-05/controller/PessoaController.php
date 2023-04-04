<?PHP
require_once "../model/Pessoa.php";

$name = $_POST['name'];
$cpf = $_POST['cpf'];
$income = $_POST['income'];

$pessoa = new Pessoa($name, $cpf, $income);

if($pessoa->isValidCpf() == true){
    $pessoa->calculateTax();
    $pessoa->calculateAllotment();
    $aliquot = $pessoa->getAliquot();
    $allotment = $pessoa->getAllotment();

    header("Location: ../return.php?name=$name&cpf=$cpf&income=$income&aliquot=$aliquot&allotment=$allotment");
}else{
    header("Location: ../index.php");
}


?>