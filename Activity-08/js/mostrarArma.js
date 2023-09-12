import Arma from './Arma.js';
import mostrarSkin from './mostrarSkins.js';

export default function mostrarArma(event){
    const id = event.srcElement.id;
    const url = `https://valorant-api.com/v1/weapons/${id}?language=pt-BR`;
    fetch(url)
    .then(function(response){
        return response.json()
    })

    .then(function(response){
        console.log(response)

        var Gun = new Arma(response.data.uuid, response.data.displayName, response.data.displayIcon, response.data.shopData.categoryText, response.data.shopData.cost, response.data.weaponStats, response.data.weaponStats.magazineSize, response.data.weaponStats.fireRate, response.data.weaponStats.runSpeedMultiplier, response.data.weaponStats.equipTimeSeconds, response.data.weaponStats.reloadTimeSeconds, response.data.weaponStats.wallPenetration, response.data.skins);

        if(response.data.weaponStats.zoomMultiplier != null){
            Gun.setZoomMira(response.data.weaponStats.zoomMultiplier);
        }

        var nomeArma = document.getElementById('nomeArma');
        var imgArma = document.getElementById('imgArma');
        var tipoArma = document.getElementById('tipoArma');
        var precoArma = document.getElementById('precoArma');
        var danoArma = document.getElementById('danoArma');
        var cPente = document.getElementById('cPente');
        var Cadencia = document.getElementById('cadencia');
        var vMove = document.getElementById('vMove');
        var tEquipar = document.getElementById('tEquipar');
        var tRecarregar = document.getElementById('tRecarregar');
        var pParede = document.getElementById('pParede');
        var zoomMira = document.getElementById('zoomMira');

        nomeArma.textContent = Gun.getNome();
        imgArma.setAttribute('src', Gun.getImg());
        tipoArma.textContent = Gun.getTipo();
        precoArma.textContent = Gun.getPreco();
        danoArma.innerHTML = Gun.getDano();
        cPente.textContent = Gun.getCPente();
        Cadencia.textContent = Gun.getCadencia();
        vMove.textContent = Gun.getVMove();
        tEquipar.textContent = Gun.getTEquipar();
        tRecarregar.textContent = Gun.getTRecarregar();
        pParede.textContent = Gun.getPenetração();
        zoomMira.textContent = Gun.getZoomMira();

        mostrarSkin(response.data.skins);
    })
}