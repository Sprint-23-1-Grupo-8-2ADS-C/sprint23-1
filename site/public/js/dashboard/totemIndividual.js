async function setInfosTotemIndividual() {
  const idTotem = sessionStorage.ID_TOTEM;
  const fkCompanhia = sessionStorage.ID_COMPANHIA;

  try {
    const res = await fetch(`/totens/buscaIndividual/${idTotem}/${fkCompanhia}`)
    const totem = await res.json()

    totem.forEach(componentes => {
      console.log(componentes);
    });

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
    
  } catch(err) {
    console.error(err);
  }
}