var soma = 1;
var pontoAtualUmDisplay = document.getElementById('pontosUm')
var pontoAtualDoisDisplay = document.getElementById('pontosDois')
var pontoAtualUm = 0;
var pontoAtualDois = 0;
var tUm = document.getElementById('time-um')
var tDois = document.getElementById('time-dois')
var ven = document.getElementById('vencedor')

function nomeUm() {
    document.getElementById('time-um').setAttribute('readonly', true);
    document.getElementById('nome-um').style.display='none';
    if(document.getElementById('nome-dois').style.display == 'none'){
        document.getElementById('points').style.display = 'flex';
        document.getElementById('roda').style.display = 'flex';
        document.getElementById('botoes').style.display = 'flex'; 
        document.getElementById('botoes-dois').style.display = 'flex';
    }
}

function nomeDois() {
    document.getElementById('time-dois').setAttribute('readonly', true);
    document.getElementById('nome-dois').style.display='none';
    if(document.getElementById('nome-um').style.display == 'none'){
        document.getElementById('points').style.display = 'flex';
        document.getElementById('roda').style.display = 'flex';
        document.getElementById('botoes').style.display = 'flex'; 
        document.getElementById('botoes-dois').style.display = 'flex';
    }
}

function adUm(){
    pontoAtualUm = pontoAtualUm + soma;
    pontoAtualUmDisplay.innerHTML = pontoAtualUm;
    soma = 1;
    if (pontoAtualUm >=12){
        ven.innerHTML = "O vencedor é " + tUm.value;
        document.getElementById('botoes').style.display = 'none';
        document.getElementById('botoes-dois').style.display = 'none';
        document.getElementById('roda').style.display = 'none';
        document.getElementById('newGame').style.display = 'flex';
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
    if (pontoAtualDois >=12){
        ven.innerHTML = "O vencedor é " + tDois.value;
        document.getElementById('botoes').style.display = 'none';
        document.getElementById('botoes-dois').style.display = 'none';
        document.getElementById('roda').style.display = 'none';
        document.getElementById('newGame').style.display = 'flex';
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

function novoJogo(){
    location.reload();
}

function fechar(){
    window.close();
}