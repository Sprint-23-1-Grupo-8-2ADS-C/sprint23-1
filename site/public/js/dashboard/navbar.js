
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
            <div class="divItem itemNavigation">
            <a href="indexDash.html"><img src="../../assets/SVG/icons/dashboard.SVG"></a>
                <span onclick = "window.location = 'indexDash.html'">Dashboard</span>
            </div>
            <div class="divItem itemNavigation" onclick="abrirModal()">
                <img src="../../assets/SVG/icons/graphic.SVG">
                <span>Totem</span>
            </div>
            <div class="divItem itemNavigation">
            <a href="cadastrarTotem.html"><img src="../../assets/SVG/icons/add.SVG"></a>
                <span onclick = "window.location = 'cadastrarTotem.html'">Add Totem</span>
            </div>
            <div class="divItem itemNavigation">
            <a href="funcionarioDash.html"><img src="../../assets/SVG/icons/person.SVG"></a>
            <span onclick = "window.location = 'funcionarioDash.html'">Time</span>
            </div>
        </div>

        <div class="divNavigationUser">
            <div class="divItem itemNavigation">
                <img src="../../assets/SVG/icons/conversation.svg">
                <span>Suporte</span>
            </div>
            <div class="divItem itemNavigation">
            <a href="configDash.html"><img src="../../assets/SVG/icons/config.svg"></a>
                <span onclick = "window.location = 'configDash.html'">Configuração</span>
            </div>
        </div>

        <div class="divNavigationExit">
            <div class="divItem logOut" onclick="limparSessao()">
                <img src="../../assets/SVG/icons/exit.svg">
                <span>Log out</span>
            </div>
        </div>
    </div>
`;

const nav = document.getElementById("navbar");
nav.innerHTML = navContent;

var dialogContent = `
    <div class="divSelecionarTotem">
        <h3>Selecionar Totem</h3>
        <div class="divSearch"> 
            <img src="../../assets/SVG/icons/search.svg">
            <input type="text" placeholder="Encontrar máquina...">
        </div>

        <div class="divTable">
            <table id="tableTotens">
                <tr>
                    <td></td>
                    <td class="tdFirst">Máquina</td>
                    <td class="tdFirst">Token</td>
                </tr>
            </table>
        </div>

        <button onclick="window.location = 'totem.html'">Selecionar</button>
    </div>
`;

const dialog = document.getElementById("dialog");
dialog.innerHTML = dialogContent;


async function getTotensForModal() {
  const fkCompanhia = sessionStorage.ID_COMPANHIA;
  const tableTotens = document.getElementById("tableTotens");
  
  tableTotens.innerHTML = `
        <tr> 
            <td></td>
            <td class="tdFirst">Máquina</td>
            <td class="tdFirst">Token</td>
        </tr>
    `;

  try {
    const res = await fetch(`/totens/buscarTotens/${fkCompanhia}`);
    const totens = await res.json();

    totens.map((totem) => {
      tableTotens.innerHTML += `
                <tr>
                    <td>
                        <input type="radio" name="radio[]" value=${totem.idTotem} onclick="selectRow(${totem.idTotem})">
                    </td>
                    <td class="tdDefault">Totem ${totem.idTotem}</td>
                    <td class="tdDefault">${totem.token}</td>
                </tr>
            `;
    });
    
  } catch (err) {
    console.error(err);
  }
}

function selectRow(idTotem) {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const id = idTotem;
  
  sessionStorage.ID_TOTEM = id

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      const tr = radioButton.closest("tr");
      const table = tr.closest("table");
      tr.classList.add("selected");

      table.querySelectorAll("tr").forEach((row) => {
        if (row !== tr) {
          row.classList.remove("selected");
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