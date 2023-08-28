
const container = document.getElementById('container');
const Armas = document.getElementById('Armas');

//Elementos da descrição
const dDescArma = document.getElementById('dDescArma');
const nomeArma = document.getElementById('nomeArma');
const imgArma = document.getElementById('imgArma');
const tipoArma = document.getElementById('tipoArma');
const precoArma = document.getElementById('precoArma');
const danoArma = document.getElementById('danoArma');
const cPente = document.getElementById('cPente');
const Cadencia = document.getElementById('cadencia');
const vMove = document.getElementById('vMove');
const tEquipar = document.getElementById('tEquipar');
const tRecarregar = document.getElementById('tRecarregar');
const pParede = document.getElementById('pParede');
const zoomMira = document.getElementById('zoomMira');

    let url = 'https://valorant-api.com/v1/weapons?language=pt-BR';

    fetch(url)

    .then(function(response){
        return response.json()
    })

    .then(function(response){
        console.log(response)
        //para cada arma, criar um card com a imagem e o nome
        response.data.forEach(arma => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', arma.uuid);
            card.setAttribute('onclick', 'mostrarArma(this.id)');

            const img = document.createElement('img');
            img.setAttribute('src', arma.displayIcon);
            img.setAttribute('class', 'img');

            const nome = document.createElement('h3');
            nome.textContent = arma.displayName;

            card.appendChild(img);
            card.appendChild(nome);
            Armas.appendChild(card);
        }
        )
    })

    function mostrarArma(id){
        const url = `https://valorant-api.com/v1/weapons/${id}?language=pt-BR`;
        fetch(url)
        .then(function(response){
            return response.json()
        })

        .then(function(response){
            console.log(response)

            nomeArma.textContent = response.data.displayName;
            imgArma.setAttribute('src', response.data.displayIcon);

            if(response.data.shopData != null){
            tipoArma.textContent = response.data.shopData.categoryText;
            precoArma.textContent = response.data.shopData.cost +' Creditos';
            } else {
                tipoArma.textContent = 'Não especificado ou não disponível';
                precoArma.textContent = 'Não especificado ou não disponível';
            }

            //Descrição da arma
            if(response.data.weaponStats != null){
            danoArma.innerHTML = response.data.weaponStats.damageRanges[0].rangeStartMeters + ' - ' + response.data.weaponStats.damageRanges[0].rangeEndMeters + ' metros' + ' > ' + response.data.weaponStats.damageRanges[0].headDamage + ' de dano na cabeça | ' + ' | ' + response.data.weaponStats.damageRanges[0].bodyDamage + ' de dano no corpo | ' + ' | ' + response.data.weaponStats.damageRanges[0].legDamage + ' de dano nas pernas  <br>';

            if(response.data.weaponStats.damageRanges[1] != null){
            danoArma.innerHTML += response.data.weaponStats.damageRanges[1].rangeStartMeters + ' - ' + response.data.weaponStats.damageRanges[1].rangeEndMeters + ' metros' + ' > ' + response.data.weaponStats.damageRanges[1].headDamage.toFixed(2) + ' de dano na cabeça | ' + ' | ' + response.data.weaponStats.damageRanges[1].bodyDamage + ' de dano no corpo | ' + ' | ' + response.data.weaponStats.damageRanges[1].legDamage.toFixed(2) + ' de dano nas pernas  ';
            }

            cPente.textContent = response.data.weaponStats.magazineSize + ' Munições no pente';

            Cadencia.textContent = response.data.weaponStats.fireRate + ' de cadência de tiro';

            if(response.data.weaponStats.runSpeedMultiplierZoomed == null){
                vMove.textContent = response.data.weaponStats.runSpeedMultiplier + ' de velocidade de movimento';
            } else {
                vMove.textContent = response.data.weaponStats.runSpeedMultiplier + ' de velocidade de movimento | '+ response.data.weaponStats.runSpeedMultiplierZoomed + ' de velocidade de movimento ao mirar';
            }

            tEquipar.textContent = response.data.weaponStats.equipTimeSeconds + ' segundos para equipar';

            tRecarregar.textContent = response.data.weaponStats.reloadTimeSeconds + ' segundos para recarregar';

            response.data.weaponStats.wallPenetration = response.data.weaponStats.wallPenetration.split(':')[2];
            response.data.weaponStats.wallPenetration = response.data.weaponStats.wallPenetration.replace('Low', 'Baixo');
            response.data.weaponStats.wallPenetration = response.data.weaponStats.wallPenetration.replace('Medium', 'Médio');
            response.data.weaponStats.wallPenetration = response.data.weaponStats.wallPenetration.replace('High', 'Alto');
            response.data.weaponStats.wallPenetration = response.data.weaponStats.wallPenetration.replace('Extreme', 'Extremo');
            pParede.textContent = response.data.weaponStats.wallPenetration + ' Nivel de penetração de parede';

            if(response.data.weaponStats.adsStats != null){
                zoomMira.textContent = response.data.weaponStats.adsStats.zoomMultiplier + ' de zoom ao mirar';
            } else {
                zoomMira.textContent = 'Não especificado ou não disponível';
            }

        } else {
            danoArma.textContent = 'Não especificado ou não disponível';
            cPente.textContent = 'Não especificado ou não disponível';
            Cadencia.textContent = 'Não especificado ou não disponível';
            vMove.textContent = 'Não especificado ou não disponível';
            tEquipar.textContent = 'Não especificado ou não disponível';
            tRecarregar.textContent = 'Não especificado ou não disponível';
            pParede.textContent = 'Não especificado ou não disponível';
            zoomMira.textContent = 'Não especificado ou não disponível';
        }
        })
    }