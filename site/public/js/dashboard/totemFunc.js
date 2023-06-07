function mostrarEstadoTotens(totens) {
    const divEstadoTotens = document.getElementById('divEstadoTotens')
        totens.forEach((totem) => {
          console.log(totem);
            divEstadoTotens.innerHTML += `
                <tr>
                    <td>Totem ${totem.idTotem}</td>
                    <td class=${totem.boolCaptura ? "totemAtivo" : "totemInativo"}>${totem.boolCaptura ? "Ativo" : "Inativo"}</td>
                    <td>1h</td>
                </tr>
            `
        });
}

async function getQtdTotalTotens() {
  const fkCompanhia = sessionStorage.ID_COMPANHIA;
    try {
      const res = await fetch(`/totens/count/${fkCompanhia}`)
      const result = await res.json()

      document.getElementById("spQuantidade").innerHTML = `${result[0].quantidadeTotens}`
    } catch (err) {
      console.error(err);
    }
}

async function getQtdTotensAtivo() {
  const idCompanhia = sessionStorage.ID_COMPANHIA;

  await fetch(`/totens/countAtivos/${idCompanhia}`)
    .then((result) => {
      result.json()
        .then((res) => {
          document.getElementById("spQuantidadeAtivos").innerHTML = `${res[0].quantidadeTotens}`
        })
    })
    .catch((err) => {
      console.error(err);
    })
}

async function getQtdTotensInativo() {
  const idCompanhia = sessionStorage.ID_COMPANHIA;

  await fetch(`/totens/countInativos/${idCompanhia}`)
    .then((result) => {
      result.json()
        .then((res) => {
          document.getElementById("spQuantidadeInativos").innerHTML = `${res[0].quantidadeTotens}`
        })
    })
    .catch((err) => {
      console.error(err);
    })
}

async function buscarTotens() {
  const fkCompanhia = sessionStorage.ID_COMPANHIA;

  try {
    const res = await fetch(`/totens/buscarTotens/${fkCompanhia}`);
    const totens = await res.json();
    mostrarEstadoTotens(totens);
    getQtdTotalTotens();
    getQtdTotensAtivo();
    getQtdTotensInativo()
  } catch (err) {
    console.error(err);
  }
}

async function setInfosTotemIndividual() {
  const idTotem = sessionStorage.ID_TOTEM;
  const fkCompanhia = sessionStorage.ID_COMPANHIA;

  try {
    const res = await fetch(`/totens/buscaIndividual/${idTotem}/${fkCompanhia}`);
    const totem = await res.json();

    document.getElementById('idTotemInformation').innerHTML = idTotem;

    document.getElementById('divProcessadorInformation').innerHTML = `
      <span>Processador</span>
      <h3>${totem[0].processador}</h3>
    `;

    document.getElementById('divSoInformation').innerHTML = `
      <h3>${totem[0].sistemaOperacional}</h3>
    `;

    document.getElementById('divRamInformation').innerHTML = `
      <span>Total RAM</span>
      <h3>${totem[0].total}gb</h3>
    `;

    document.getElementById('divDiscoInformation').innerHTML = `
      <span>Total Disco</span>
      <h3>${totem[1].total}gb</h3>
    `;

    document.getElementById('divNumberToken').innerHTML = `
      <span>${totem[0].token}</span>
    `;
  } catch (error) {
    console.error(error);
  }
}

async function cadastrarTotem() {
  const checkboxOn = document.getElementById('checkboxCaptura').checked;
  const fkCompanhia = sessionStorage.ID_COMPANHIA;

  const infosTotem = {
    sistemaOperacional: selSO.value,
    fabricante: iptFabricante.value,
    arquitetura: selArquitetura.value,
    processador: iptProcessador.value,
    localizacao: iptLocalizacao.value,
    totalDisco: iptTotalDisco.value,
    totalRam: iptTotalRam.value,
    boolCaptura: checkboxOn
  };

  try {
    const res = await fetch(`/totens/cadastrarTotem/${fkCompanhia}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sistemaOperacional: infosTotem.sistemaOperacional,
        fabricante: infosTotem.fabricante,
        arquitetura: infosTotem.arquitetura,
        processador: infosTotem.processador,
        localizacao: infosTotem.localizacao,
        totalDisco: infosTotem.totalDisco,
        totalRam: infosTotem.totalRam,
        boolCaptura: checkboxOn
      })
    });

    if (res.ok) {
      console.log('Totem cadastrado com sucesso.');
    } else {
      console.log('Erro ao enviar informações. Status:', res.status);
    }
  } catch (error) {
    console.log('Erro:', error);
  }

  return false;
}