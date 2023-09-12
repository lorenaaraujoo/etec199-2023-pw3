//criar uma classe arma
export default class Arma {
    constructor(uuid, nome, img, tipo, preco, dano, cPente, cadencia, vMove, tEquipar, tRecarregar, pParede, Skins) {
        this.uuid = uuid;
        this.nome = nome;
        this.img = img
        this.tipo = tipo;
        this.preco = preco;
        this.setDano(dano);
        this.setCPente(cPente);
        this.setCadencia(cadencia);
        this.setVMove(vMove);
        this.setTEquipar(tEquipar);
        this.setTRecarregar(tRecarregar);
        this.setPenetração(pParede);
        this.Skins = Skins;
    }

    //getters e setters
    getuuid() {
        return this.uuid;
    }
    setuuid(uuid) {
        this.uuid = uuid;
    }

    getNome() {
        return this.nome;
    }
    setNome(nome) {
        if(nome != null){
            this.nome = nome;
        } else {
            this.nome = 'Não especificado ou não disponível';
        }
    }

    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img;
    }

    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        if(tipo != null){
            this.tipo = tipo;
        } else {
            this.tipo = 'Não especificado ou não disponível';
        }
    }

    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        if(preco != null){
            this.preco = preco;
        } else {
            this.preco = 'Não especificado ou não disponível';
        }
    }

    getDano() {
        return this.dano;
    }
    setDano(dano) {
        if(dano != null){
            var distanciaInicial = dano.damageRanges[0].rangeStartMeters;
            var distanciaFinal = dano.damageRanges[0].rangeEndMeters;
            var danoCabeca = dano.damageRanges[0].headDamage;
            var danoCorpo = dano.damageRanges[0].bodyDamage;
            var danoPerna = dano.damageRanges[0].legDamage;
                if(dano.damageRanges[1] != null){
                    var distanciaInicial2 = dano.damageRanges[1].rangeStartMeters;
                    var distanciaFinal2 = dano.damageRanges[1].rangeEndMeters;
                    var danoCabeca2 = dano.damageRanges[1].headDamage;
                    var danoCorpo2 = dano.damageRanges[1].bodyDamage;
                    var danoPerna2 = dano.damageRanges[1].legDamage;
                    
                    this.dano = distanciaInicial + ' - ' + distanciaFinal + ' metros' + ' > ' + danoCabeca + ' de dano na cabeça | ' + ' | ' + danoCorpo + ' de dano no corpo | ' + ' | ' + danoPerna + ' de dano nas pernas  <br>' + distanciaInicial2 + ' - ' + distanciaFinal2 + ' metros' + ' > ' + danoCabeca2 + ' de dano na cabeça | ' + ' | ' + danoCorpo2 + ' de dano no corpo | ' + ' | ' + danoPerna2 + ' de dano nas pernas  ';
                }
        this.dano = distanciaInicial + ' - ' + distanciaFinal + ' metros' + ' > ' + danoCabeca + ' de dano na cabeça | ' + ' | ' + danoCorpo + ' de dano no corpo | ' + ' | ' + danoPerna + ' de dano nas pernas  ';
        } else {
            this.dano = 'Não especificado ou não disponível';
        }
    }

    getCPente() {
        return this.cPente;
    }
    setCPente(cPente) {
        if(cPente != null){
            this.cPente = cPente +" Munições no pente";
        } else {
            this.cPente = 'Não especificado ou não disponível';
        }
    }

    getCadencia() {
        return this.cadencia;
    }
    setCadencia(cadencia) {
        if(cadencia != null){
            this.cadencia = cadencia +" de cadência de tiro";
        } else {
            this.cadencia = 'Não especificado ou não disponível';
        }
    }

    getVMove() {
        return this.vMove;
    }
    setVMove(vMove) {
        if(vMove != null){
            this.vMove = vMove +" de velocidade de movimento";
        } else {
            this.vMove = 'Não especificado ou não disponível';
        }
    }

    getTEquipar() {
        return this.tEquipar;
    }
    setTEquipar(tEquipar) {
        if(tEquipar != null){
            this.tEquipar = tEquipar +" segundos para equipar";
        } else {
            this.tEquipar = 'Não especificado ou não disponível';
        }
    }

    getTRecarregar() {
        return this.tRecarregar;
    }
    setTRecarregar(tRecarregar) {
        if(tRecarregar != null){
            this.tRecarregar = tRecarregar +" segundos para recarregar";
        } else {
            this.tRecarregar = 'Não especificado ou não disponível';
        }
    }

    getPenetração() {
        return this.Penetração;
    }
    setPenetração(Penetração) {
        if(Penetração != null){
            Penetração = Penetração.split(':')[2];
            Penetração = Penetração.replace('Low', 'Baixo');
            Penetração = Penetração.replace('Medium', 'Médio');
            Penetração = Penetração.replace('High', 'Alto');
            Penetração = Penetração.replace('Extreme', 'Extremo');
            this.Penetração = Penetração +" Nivel de penetração de parede";
        } else {
            this.Penetração = 'Não especificado ou não disponível';
        }
    }

    getZoomMira() {
        return this.zoomMira;
    }
    setZoomMira(zoomMira) {
        if (typeof zoomMira === 'number') {
          this.zoomMira = zoomMira + ' de zoom ao mirar';
        } else {
          this.zoomMira = 'Não especificado ou não disponível';
        }
      }

    getSkins() {
        return this.Skins;
    }
    setSkins(Skins) {
        this.Skins = Skins;
    }
}