<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"></script>
    <title>System - Income Tax</title>
</head>

<body>
    <div class="container">
        <div class="form-image">
            <img src="img/img.png" alt="">
        </div>
        <div class="form">
            <form action="controller/PessoaController.php" method="POST">
                <div class="form-header">
                    <div class="title">
                        <h2>System Income Tax</h2>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-box">
                        <label>Name</label>
                        <input type="text" name="name" id="name" placeholder="Type your name" required>
                    </div>

                    <div class="input-box">
                        <label>CPF</label>
                        <input type="text" name="cpf" id="cpf" placeholder="Type your cpf" required>
                        <script> 
                        $(document).ready(function() {
                            $('#cpf').inputmask('999.999.999-99', {placeholder: '___.___.___-__'});
                        });
                        </script>
                    </div>
                    <div class="input-box">
                        <label>Income</label>
                        <input type="number" name="income" id="number" placeholder="Type your income" min="0" required>
                    </div>
                </div>
                <div class="continue-button">
                    <button>Calculator</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>