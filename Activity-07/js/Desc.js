let url = "./lista_produto.json"
    

    //Requisição HTTP do tipo GET
    fetch(url) //Definindo a requisição
    
    //Tratamento da resposta
    .then(function(response){
        return response.json()
    })

    .then(function(response){
        const params = new URLSearchParams(window.location.search)
        const codigo = params.get('codigo')
        let produto = response.find(function(item){
            return item.codigo == codigo
        })
        //crie os elementos e adicione ao html
        let nome = document.createElement("h1")
        nome.innerHTML = produto.nome

        let codigoElement = document.createElement("h2")
        codigoElement.innerHTML = "Código do Produto: "+produto.codigo

        let img = document.createElement("img")
        img.src = produto.url_imagem

        let fornecedor = document.createElement("h2")
        fornecedor.innerHTML = "Fornecedor: "+produto.fornecedor

        let preco = document.createElement("h2")
        preco.innerHTML = "Preço: R$"+produto.preco

        let descricao = document.createElement("h2")
        descricao.innerHTML = "Descrição: "+produto.descricao

        //adiciona os elementos ao html
        let voltarButton = document.createElement('button')
        voltarButton.classList.add('btn', 'btn-primary', 'mt-3')
        voltarButton.innerHTML = 'Voltar'
        voltarButton.addEventListener('click', function() {
            window.history.back()
        })

        //adiciona os elementos ao html
        let div = document.getElementById("produto")
        div.appendChild(nome)
        div.appendChild(codigoElement)
        div.appendChild(img)
        div.appendChild(fornecedor)
        div.appendChild(preco)
        div.appendChild(descricao)
        div.appendChild(voltarButton)
    })