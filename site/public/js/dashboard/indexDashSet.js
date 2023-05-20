//#region VÁRIAVEIS DO FLUXO
var idUsuario = sessionStorage.ID_USUARIO;
var fkCompanhia = sessionStorage.ID_COMPANHIA;
//#endregion

async function buscarTotens(){
    try {
        const res = await fetch(`/totens/buscarTotens/${fkCompanhia}`);
        const totens = await res.json();
        
        mostrarEstadoTotens(totens)
        getQtdTotalTotens()
        getTotensForModal()
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

async function getTotensForModal() {
    const tableTotens = document.getElementById('tableTotens')
    tableTotens.innerHTML = `
        <tr> 
            <td></td>
            <td class="tdFirst">Máquina</td>
            <td class="tdFirst">Token</td>
        </tr>
    `

    try {
        const res = await fetch(`/totens/buscarTotens/${fkCompanhia}`)
        const totens = await res.json()

        totens.map((totem) => {
            tableTotens.innerHTML += `
                <tr>
                    <td>
                        <input type="radio" name="radio[]" onclick="selectRow()">
                    </td>
                    <td class="tdDefault">Totem ${totem.idTotem}</td>
                    <td class="tdDefault">${totem.token}</td>
                </tr>
            `
        })
    } catch (err) {
        console.error(err);
    }
}