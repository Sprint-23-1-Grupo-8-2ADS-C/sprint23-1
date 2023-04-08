const spNome = document.getElementById("sp_nome"); 


//#region VÁRIAVEIS DO FLUXO
var idUsuario = sessionStorage.ID_USUARIO
var fkCompanhia;
//#endregion


buscarUsuario();

function buscarUsuario(){
    idUsuario = 2
    fetch(`/usuarios/buscarUsuario/${idUsuario}`).then((response) => {
        if(response.ok){
            response.json().then(function (resposta){
                mostrarUsuario(resposta);
                buscarTotens()
            })
        }
    })
    .catch((erro) => {
        console.log("Erro na obtenção da consulta");
    })
}

function mostrarUsuario(dados){
    spNome.innerHTML = dados[0].nome;
    fkCompanhia = dados[0].fkCompanhia
}


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
            console.log("Erro na obtenção da consulta");
        })
}

function mostrarTotens(dados){
    const divTotens = document.getElementById("div_totens");

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