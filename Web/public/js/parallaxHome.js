const pessoaMala = document.getElementById("imgPessoaMala");
const planta = document.getElementById("imgPlanta");
const tabela = document.getElementById("imgTabela");

var posicaoPessoaMala = pessoaMala.style.right;

window.addEventListener('scroll', function(){
    console.log(posicaoPessoaMala);
    let valor = this.window.scrollY;
    pessoaMala.style.right = (220 + ((valor * 0.1) * -1))  + 'px';
});