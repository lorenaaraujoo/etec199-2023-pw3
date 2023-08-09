let url = 'http://localhost/Ajax_API_FETCH/backEnd/controller/produtoController.php'

    //Requisição HTTP do tipo GET;
    fetch(url) //Definindo a requisição;
    
    //Tratamento da resposta
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response[0])
    })