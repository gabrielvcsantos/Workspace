var soma = 1;
var pontoAtualUmDisplay = document.getElementById('pontosUm')
var pontoAtualDoisDisplay = document.getElementById('pontosDois')
var pontoAtualUm = 0;
var pontoAtualDois = 0;
var tUm = document.getElementById('time-um')
var tDois = document.getElementById('time-dois')

function nomeUm() {
    document.getElementById('time-um').setAttribute('readonly', true);
    document.getElementById('nome-um').style.display='none';
}

function nomeDois() {
    document.getElementById('time-dois').setAttribute('readonly', true);
    document.getElementById('nome-dois').style.display='none';
}

function adUm(){
    pontoAtualUm = pontoAtualUm + soma;
    pontoAtualUmDisplay.innerHTML = pontoAtualUm;
    soma = 1;
    if(pontoAtualUm>=12){
        var ganhador = confirm("O time " + tUm + " ganhou");
    }
}

function subUm(){
    pontoAtualUm = pontoAtualUm - soma;
    if(pontoAtualUm<=0){
        pontoAtualUm = 0
    }
    pontoAtualUmDisplay.innerHTML = pontoAtualUm;
    soma = 1;
}


function adDois(){
    pontoAtualDois = pontoAtualDois + soma;
    pontoAtualDoisDisplay.innerHTML = pontoAtualDois;
    soma = 1;
    if(pontoAtualDois>=12){
        var ganhador = confirm("O time " + tDois + " ganhou");
    }
}

function subDois(){
    pontoAtualDois = pontoAtualDois - soma;
    if(pontoAtualDois<=0){
        pontoAtualDois = 0
    }
    pontoAtualDoisDisplay.innerHTML = pontoAtualDois;       
    soma = 1;
}

function truco(){
    soma = 3
}

function seis(){
    soma = 6
}

function nove(){
    soma = 9
}

function doze(){
    soma = 12
}