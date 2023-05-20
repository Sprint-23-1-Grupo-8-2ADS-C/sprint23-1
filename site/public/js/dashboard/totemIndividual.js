async function setInfosTotemIndividual() {
  try {
    const res = await fetch(`/totens/buscaIndividual`)
    const totem = await res.json()

    document.getElementById('idTotemInformation').innerHTML = totem[0].idTotem;
    document.getElementById('divProcessadorInformation').innerHTML = `
      <span>Processador</span>
      <h3>${totem[0].processador}</h3>
    `;
  } catch(err) {
    console.error(err);
  }
}