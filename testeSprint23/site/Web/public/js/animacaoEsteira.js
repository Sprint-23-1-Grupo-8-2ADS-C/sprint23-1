const mala01 = document.getElementById("imgMala01");
const mala02 = document.getElementById("imgMala02");
const mala03 = document.getElementById("imgMala03");


var contador = 1;

setTimeout(() => {
    animacaoFluxoEsteira();
}, 100);

function animacaoFluxoEsteira(){
    var fluxoEsteira = setInterval(() => {
        switch (contador){
            case 1:
                mala01.classList.add("animacaoMalaSozinha");
                console.log("Mala 01");
                animacaoMalaAuxiliar(contador + 2);
            break;
            case 2:
                mala02.classList.add("animacaoMalaSozinha");
                console.log("Mala 02");
                animacaoMalaAuxiliar(contador - 1);
            break;
            case 3: 
                mala03.classList.add("animacaoMala");
                console.log("Mala 03");
                animacaoMalaAuxiliar(contador - 1);
                contador = 0;
            break;
        }
        contador++;
        console.log(contador);
    }, 9200);
}
    
function animacaoMalaAuxiliar(contadorMudado){
    setTimeout(() => {
        switch (contadorMudado){
            case 1:
                mala01.classList.add("animacaoMalaSozinha");
                console.log("Mala 01");
                break;
            case 2:
                mala02.classList.add("animacaoMalaSozinha");
                console.log("Mala 02");
                break;
            case 3: 
                mala03.classList.add("animacaoMala");
                console.log("Mala 03");
            break;
        }
    }, 4600);
}
function removerAnimacaoFluxoEsteira(){
    mala02.classList.remove("animacaoMalaSozinha");
    mala03.classList.remove("animacaoMala");
}
// clearInterval(fluxoEsteira);

setInterval(() => {
    if(mala01.getBoundingClientRect().x <= -100){
        mala01.classList.remove("animacaoMalaSozinha");
    }

    if(mala02.getBoundingClientRect().x <= -100){
        mala02.classList.remove("animacaoMalaSozinha");
    }

    if(mala03.getBoundingClientRect().x <= -100){
        mala03.classList.remove("animacaoMala");
    }
    
}, 1000);