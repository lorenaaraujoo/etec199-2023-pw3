import mostrarArma from "./mostrarArma.js";

export default function puxarDados(){
    let url = 'https://valorant-api.com/v1/weapons?language=pt-BR';

    fetch(url)

    .then(function(response){
        return response.json()
    })

    .then(function(response){
        console.log(response)
        const Armas = document.getElementById('Armas');
        response.data.forEach(arma => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', arma.uuid);
            card.addEventListener("click", mostrarArma);

            const img = document.createElement('img');
            img.setAttribute('src', arma.displayIcon);
            img.setAttribute('class', 'img');
            img.setAttribute('id', arma.uuid);

            const nome = document.createElement('h3');
            nome.textContent = arma.displayName;
            nome.setAttribute('id', arma.uuid);

            card.appendChild(img);
            card.appendChild(nome);
            Armas.appendChild(card);
        }
        )
    })    
}