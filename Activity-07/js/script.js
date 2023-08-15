let url = './lista_produto.json';

    //Requisição HTTP do tipo GET
    fetch(url) //Definindo a requisição
    
    //Tratamento da resposta
    .then(function(response){
        return response.json()
    })

    .then(function(response){
        console.log(response)
        const div = document.getElementById('resultado')

        response.forEach(function(produto){
            console.log(produto)
            let card = document.createElement('div')
            card.classList.add('card', 'mb-3')

            let img = document.createElement('img')
            img.classList.add('card-img-top')
            img.src = produto.url_imagem

            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')

            let cardTitle = document.createElement('h5')
            cardTitle.classList.add('card-title')
            cardTitle.innerHTML = produto.nome

            let cardText = document.createElement('p')
            cardText.classList.add('card-text')
            cardText.innerHTML = produto.descricao.substring(0, 100) + '...'

            let cardFooter = document.createElement('div')
            cardFooter.classList.add('card-footer', 'text-muted')
            cardFooter.innerHTML = "R$ "+ produto.preco

            let verMaisButton = document.createElement('a')
            verMaisButton.classList.add('btn', 'btn-primary', 'mr-2')
            verMaisButton.innerHTML = 'Ver mais'
            verMaisButton.href = 'desc.html?codigo=' + produto.codigo

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(verMaisButton)
            card.appendChild(img)
            card.appendChild(cardBody)
            card.appendChild(cardFooter)

            div.appendChild(card)
        })
    })


    