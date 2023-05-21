//#region VÁRIAVEIS DO FLUXO
var fkCompanhia = sessionStorage.ID_COMPANHIA;
//#endregion

async function buscarTotens(){
    try {
        const res = await fetch(`/totens/buscarTotens/${fkCompanhia}`);
        const totens = await res.json();
        
        mostrarEstadoTotens(totens)
        getQtdTotalTotens()
    } catch (err) {
        console.error(err);
    }
}

async function mostrarEstadoTotens(totens) {
    const divEstadoTotens = document.getElementById('divEstadoTotens')

    try {
        await totens.map((totem) => {
                divEstadoTotens.innerHTML += `
                    <tr>
                        <td>Totem ${totem.idTotem}</td>
                        <td class="totemInativo">Inativo</td>
                        <td>1h</td>
                    </tr>
                `
            })
    } catch (err) {
        console.error(err);
    }
}

async function getQtdTotalTotens() {
    try {
        const res = await fetch(`/totens/count/${fkCompanhia}`)

        await res.json().then((result) => {
            console.log(result);
            document.getElementById("spQuantidade").innerHTML = `${result[0].quantidadeTotens}`
        })
    } catch (err) {
        console.error(err);
    }
}