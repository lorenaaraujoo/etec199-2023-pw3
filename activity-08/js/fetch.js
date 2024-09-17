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
        })

        //Criando elementos da parte que mostra os dados da arma selecionada
        const descArma = document.getElementById('dDescArma');

        //Imagem da Arma
        const imgArma = document.createElement('img');
        imgArma.setAttribute('src', '');
        imgArma.setAttribute('alt', 'imgArma');
        imgArma.setAttribute('id', 'imgArma');

        //Nome da Arma
        const nomeArma = document.createElement('h1');
        nomeArma.textContent = 'Nenhuma Arma Selecionada';
        nomeArma.setAttribute('id', 'nomeArma');

        //Tipo de arma
        const lbltipoArma = document.createElement('h3');
        lbltipoArma.textContent = 'Tipo de Arma: ';
        const tipoArma = document.createElement('p');
        tipoArma.setAttribute('id', 'tipoArma');
        tipoArma.textContent = 'Nenhuma Arma Selecionada';

        //Preço da Arma
        const lblprecoArma = document.createElement('h3');
        lblprecoArma.textContent = 'Preço: ';
        const precoArma = document.createElement('p');
        precoArma.setAttribute('id', 'precoArma');
        precoArma.textContent = 'Nenhuma Arma Selecionada';

        //Dados da Arma
        const lbldanoArma = document.createElement('h3');
        lbldanoArma.textContent = 'Dano: ';
        const danoArma = document.createElement('p');
        danoArma.setAttribute('id', 'danoArma');
        danoArma.textContent = 'Nenhuma Arma Selecionada';

        //Capacidade do Pente
        const lblcPente = document.createElement('h3');
        lblcPente.textContent = 'Capacidade do Pente: ';
        const cPente = document.createElement('p');
        cPente.setAttribute('id', 'cPente');
        cPente.textContent = 'Nenhuma Arma Selecionada';

        //Cadência de Tiro
        const lblcadencia = document.createElement('h3');
        lblcadencia.textContent = 'Cadência de Tiro: ';
        const cadencia = document.createElement('p');
        cadencia.setAttribute('id', 'cadencia');
        cadencia.textContent = 'Nenhuma Arma Selecionada';

        //Velocidade de Movimento
        const lblvMove = document.createElement('h3');
        lblvMove.textContent = 'Velocidade de Movimento: ';
        const vMove = document.createElement('p');
        vMove.setAttribute('id', 'vMove');
        vMove.textContent = 'Nenhuma Arma Selecionada';

        //Tempo para Equipar
        const lbltEquipar = document.createElement('h3');
        lbltEquipar.textContent = 'Tempo para Equipar: ';
        const tEquipar = document.createElement('p');
        tEquipar.setAttribute('id', 'tEquipar');
        tEquipar.textContent = 'Nenhuma Arma Selecionada';

        //Tempo para Recarregar
        const lbltRecarregar = document.createElement('h3');
        lbltRecarregar.textContent = 'Tempo para Recarregar: ';
        const tRecarregar = document.createElement('p');
        tRecarregar.setAttribute('id', 'tRecarregar');
        tRecarregar.textContent = 'Nenhuma Arma Selecionada';

        //Penetração de Parede
        const lblpParede = document.createElement('h3');
        lblpParede.textContent = 'Penetração de Parede: ';
        const pParede = document.createElement('p');
        pParede.setAttribute('id', 'pParede');
        pParede.textContent = 'Nenhuma Arma Selecionada';
        
        //Zoom ao Mira
        const lblzoomMira = document.createElement('h3');
        lblzoomMira.textContent = 'Zoom ao Mirar: ';
        const zoomMira = document.createElement('p');
        zoomMira.setAttribute('id', 'zoomMira');
        zoomMira.textContent = 'Nenhuma Arma Selecionada';

        //Skins
        const dSkins = document.createElement('div');
        dSkins.setAttribute('id', 'Skins');
        const lblSkins = document.createElement('h1');
        lblSkins.textContent = 'Skins';
        dSkins.appendChild(lblSkins);


        //Adicionando os elementos criados ao HTML
        descArma.appendChild(imgArma);
        descArma.appendChild(nomeArma);
        descArma.appendChild(lbltipoArma);
        descArma.appendChild(tipoArma);
        descArma.appendChild(lblprecoArma);
        descArma.appendChild(precoArma);
        descArma.appendChild(lbldanoArma);
        descArma.appendChild(danoArma);
        descArma.appendChild(lblcPente);
        descArma.appendChild(cPente);
        descArma.appendChild(lblcadencia);
        descArma.appendChild(cadencia);
        descArma.appendChild(lblvMove);
        descArma.appendChild(vMove);
        descArma.appendChild(lbltEquipar);
        descArma.appendChild(tEquipar);
        descArma.appendChild(lbltRecarregar);
        descArma.appendChild(tRecarregar);
        descArma.appendChild(lblpParede);
        descArma.appendChild(pParede);
        descArma.appendChild(lblzoomMira);
        descArma.appendChild(zoomMira);
        descArma.appendChild(dSkins);
    })    
}