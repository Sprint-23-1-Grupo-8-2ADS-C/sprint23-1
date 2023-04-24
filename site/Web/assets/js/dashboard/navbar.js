var navContent = `
    <div class="divLogo">
        <img src="../../assets/SVG/logo.svg">
        <h3>
            <span>Airplane</span> 
            Solutions
        </h3>
    </div>

    <div class="divItems">

        <div class="divNavigationItems">
            <div class="divItem itemNavigation itemSelect">
                <img src="../../assets/SVG/icons/dashboard.SVG">
                <span>Dashboard</span>
            </div>
            <div class="divItem itemNavigation" onclick="abrirModal()">
                <img src="../../assets/SVG/icons/graphic.SVG">
                <span>Totem</span>
            </div>
            <div class="divItem itemNavigation">
                <img src="../../assets/SVG/icons/add.SVG">
                <span>Add Totem</span>
            </div>
            <div class="divItem itemNavigation">
                <a href="timeDash.html"><img src="../../assets/SVG/icons/person.SVG"></a>
                <span>Time</span>
            </div>
        </div>

        <div class="divNavigationUser">
            <div class="divItem itemNavigation">
                <img src="../../assets/SVG/icons/conversation.svg">
                <span>Suporte</span>
            </div>
            <div class="divItem itemNavigation">
                <img src="../../assets/SVG/icons/config.svg">
                <span>Configuração</span>
            </div>
        </div>

        <div class="divNaviagtionExit">
            <div class="divItem logOut">
                <img src="../../assets/SVG/icons/exit.svg">
                <span>Log out</span>
            </div>
        </div>
    </div>
`

const nav = document.getElementById('navbar')
nav.innerHTML = navContent


var dialogContent = `
    <div class="divSelecionarTotem">
        <h3>Selecionar Totem</h3>
        <div class="divSearch"> 
            <img src="../../assets/SVG/icons/search.svg">
            <input type="text" placeholder="Encontrar máquina...">
        </div>

        <div class="divTable">
            <table>
                <tr>
                    <td></td>
                    <td class="tdFirst">Máquina</td>
                    <td class="tdFirst">Tokem</td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" name="radio[]" onclick="selectRow()">
                    </td>
                    <td class="tdDefault">Totem 02</td>
                    <td class="tdDefault">A002</td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" name="radio[]" onclick="selectRow()">
                    </td>
                    <td class="tdDefault">Totem 03</td>
                    <td class="tdDefault">A003</td>
                </tr>
                <tr>
                    <td>
                        <input type="radio" name="radio[]" onclick="selectRow()">
                    </td>
                    <td class="tdDefault">Totem 03</td>
                    <td class="tdDefault">A003</td>
                </tr>
            </table>
        </div>

        <button>Selecionar</button>
    </div>
`

const dialog = document.getElementById('dialog');
dialog.innerHTML = dialogContent
function selectRow(){
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            const tr = radioButton.closest('tr');
            const table = tr.closest('table');
            tr.classList.add('selected');
            
            table.querySelectorAll('tr').forEach((row) => {
                if (row !== tr) {
                    row.classList.remove('selected');
                }
            });
        });
    });
    console.log(radioButtons);
}

function abrirModal() {
    const modal = document.querySelector("dialog");
    modal.showModal();
}