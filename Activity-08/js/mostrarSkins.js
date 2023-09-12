export default function mostrarSkin(Skins){
    console.log(Skins);
    const dSkins = document.getElementById('Skins');
    while (dSkins.firstChild) {
        dSkins.removeChild(dSkins.firstChild);
    }
    
    Skins.forEach(arma => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const img = document.createElement('img');
        img.setAttribute('src', arma.displayIcon);
        img.setAttribute('class', 'img');

        const nome = document.createElement('h3');
        nome.textContent = arma.displayName;

        card.appendChild(img);
        card.appendChild(nome);
        dSkins.appendChild(card);
    })
}