//#region VÁRIAVEIS DO FLUXO
var idUsuario = sessionStorage.ID_USUARIO
var fkCompanhia = sessionStorage.ID_COMPANHIA;
//#endregion

function buscarTotens(){
    fetch(`/totens/buscarTotens/${fkCompanhia}`)
        .then((response) => {
            if(response.ok){
                response.json().then(function (resposta){
                    mostrarTotens(resposta)
                })
            }
        })
        .catch((erro) => {
            console.log("Erro na obtenção da consulta" + erro);
        })
}

function mostrarTotens(dados){
    const divTotens = document.getElementById("divTotens");

    dados.forEach(totem => {
        divTotens.innerHTML += `
        <div class="div_totem">
            <ul>
                <li>Totem ${totem.idTotem}</li>
                <li>${totem.fabricante}</li>
                <li>${totem.sistemaOperacional}</li>
                <li>${totem.arquitetura}</li>
            </ul>
        </div>
        `    
    });
}