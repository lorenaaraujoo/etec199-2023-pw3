let url = 'http://localhost/apiFetch/lista_produto.json';

    //Requisição HTTP do tipo GET
    fetch(url) //Definindo a requisição
    
    //Tratamento da resposta
    .then(function(response){
        return response.json()
    })

    //Fazendo uma tabela com os dados da requisição
    .then(function(response){
        console.log(response)
        const div = document.getElementById('resultado')
        let tabela = document.createElement('table')
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')

        let tr = document.createElement('tr')
        let thId = document.createElement('th')
        let thImg = document.createElement('th')
        let thNome = document.createElement('th')
        let thPreco = document.createElement('th')
        let thDescricao = document.createElement('th')
        let thFornecedor = document.createElement('th')

        thId.innerHTML = 'Código'
        thImg.innerHTML = 'Imagem'
        thNome.innerHTML = 'Nome'
        thPreco.innerHTML = 'Preço'
        thDescricao.innerHTML = 'Descrição'
        thFornecedor.innerHTML = 'Fornecedor'
        

        tr.appendChild(thId)
        tr.appendChild(thImg)
        tr.appendChild(thNome)
        tr.appendChild(thPreco)
        tr.appendChild(thDescricao)
        tr.appendChild(thFornecedor)


        thead.appendChild(tr)
        tabela.appendChild(thead)

        response.forEach(function(produto){
            console.log(produto)
            let tr = document.createElement('tr')
            let tdId = document.createElement('td')
            let tdImg = document.createElement('td')
            let tdNome = document.createElement('td')
            let tdPreco = document.createElement('td')
            let tdDescricao = document.createElement('td')
            let tdFornecedor = document.createElement('td')

            let img = document.createElement('img')

            tdId.innerHTML = produto.codigo
            img.src = produto.url_imagem
            tdNome.innerHTML = produto.nome
            tdPreco.innerHTML = "R$ "+ produto.preco
            tdDescricao.innerHTML = produto.descricao
            tdFornecedor.innerHTML = produto.fornecedor

            tr.appendChild(tdId)
            tr.appendChild(tdImg)
            tdImg.appendChild(img)
            tr.appendChild(tdNome)
            tr.appendChild(tdPreco)
            tr.appendChild(tdDescricao)
            tr.appendChild(tdFornecedor)

            tbody.appendChild(tr)
        })

        tabela.appendChild(tbody)
        div.appendChild(tabela)
    })