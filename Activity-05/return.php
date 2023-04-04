<?php
    $name = $_GET['name'];
    $cpf = $_GET['cpf'];
    $income = $_GET['income'];
    $aliquot = $_GET['aliquot'];
    $allotment = $_GET['allotment'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System - Income Tax</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <div class="form-image">
            <img src="img/img.png" alt="">
        </div>
        <div class="return">     
        <div class="form-header">
                    <div class="title">
                        <h2>System Income Tax</h2>
                    </div>
                </div>
     
                <div class="input-group">
                    <div class="input-box">
                        <label>Name</label>
                        <p id="name">
                            <?php echo $name ?>
                        </p>
                    </div>

                    <div class="input-box">
                        <label>CPF</label>
                        <p id="cpf">
                            <?php echo $cpf ?>
                        </p>
                    </div>

                    <div class="input-box">
                        <label>Income</label>
                        <p id="income">
                            <?php echo $income ?>
                        </p>
                    </div>

                    <div class="input-box">
                        <label>Aliquot</label>
                        <p id="tax">
                            <?php echo $aliquot ?>
                        </p>
                    </div>
                    
                    <div class="input-box">
                        <label>Allotment</label>
                        <p id="allotment">
                            <?php echo $allotment ?>
                        </p>
                    </div>
                    
                </div>
                <div class="continue-button">
                    <button onClick="history.go(-1)">Back</button>
                </div>
        </div>
    </div> 
</body>
</html>