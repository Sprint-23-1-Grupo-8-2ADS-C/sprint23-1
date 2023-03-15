const pessoaMala = document.getElementById("imgPessoaMala");
const planta = document.getElementById("imgPlanta");
const tabela = document.getElementById("imgTabela");

const bgImgFundo = document.getElementsByClassName("banner");
const body = document.getElementsByTagName("body");
const esteira = document.getElementById("esteira");

var valor = 0;
var mensagem = pessoaMala.style.right

var largura = window.screen.width;
console.log(largura);

console.log(mensagem + "px");
window.addEventListener('scroll', function(){
    valor = this.window.scrollY;
    console.log(valor);
    
    // PESSOA MOVER PARA DIREITA
    if(largura < 700){
        pessoaMala.style.right = (10+ ((valor * 0.4) * -1))  + 'px';
    }
    else{
        pessoaMala.style.right = (220 + ((valor * 0.4) * -1))  + 'px';
    }

    // MALA E PLANTA MOVER PARA ESQUERDA
    planta.style.right = -70 + (valor * 0.1) + 'px';
    tabela.style.right = 400 + (valor * 0.2) + 'px';

    if(valor <= 700){
        esteira.style.bottom = -1000 + (valor * 1.4) + 'px';
    }
});
