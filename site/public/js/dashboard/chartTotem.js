var genericOptions = {
    fill: false,
    interaction: {
      intersect: false
    },
    radius: 0,
}

// GRÁFICOS TOTEM
const chartCpuTotem = document.getElementById('chartCpuTotem');
chartCpuTotem.width = chartCpuTotem.parentNode.clientWidth;
chartCpuTotem.height = chartCpuTotem.parentNode.clientHeight;

async function obterDadosGraficoCpuHora() {
    const idCompanhia = sessionStorage.ID_COMPANHIA;
    const idTotem = sessionStorage.ID_TOTEM;

    await fetch(`/medidas/usoCpuPorHora/${idTotem}/${idCompanhia}`, { cache: "no-store" })
        .then((result) => {
        if (result.ok) {
            result.json().then((res) => {
                plotarGraficoCpuHora(res)
            })
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
        })
        .catch((err) => {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${err.message}`);
        })
}

function plotarGraficoCpuHora(res) {
    let labels = []
  
    let dados = {
      labels: labels,
      datasets: [{
        label: "% de uso",
        data: [],
        borderWidth: 1
      }]
    }
  
    console.log("Registros coletados:", res);
  
    res.forEach(registro => {
        labels.push(registro.dataFormatada)
        dados.datasets.forEach(dataset => {
            dataset.data.push(registro.valorUso)
        });
    });
  
    const config = {
      type: "line",
      data: dados,
      options: genericOptions
    }
  
    let grafico = new Chart(chartCpuTotem, config)
  
    // setTimeout(() => atualizarGraficoCpu(grafico, dataCpu))
  }

const chartRamTotem = document.getElementById('chartRamTotem');
chartRamTotem.width = chartRamTotem.parentNode.clientWidth;
chartRamTotem.height = chartRamTotem.parentNode.clientHeight;

async function obterDadosGraficoRam() {
    const idCompanhia = sessionStorage.ID_COMPANHIA;
    const idTotem = sessionStorage.ID_TOTEM;

    await fetch(`/medidas/usoRamAtual/${idTotem}/${idCompanhia}`, { cache: "no-store" })
        .then((result) => {
        if (result.ok) {
            result.json().then((res) => {
                plotarGraficoRam(res)
            })
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
        })
        .catch((err) => {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${err.message}`);
        })
}

function plotarGraficoRam(res) {
    let dados = {
      labels: ["Livre", "Ocupado"],
      datasets: [{
        label: "% de uso",
        data: [],
      }]
    }
  
    console.log("Registros coletados:", res);

    const qtdDisponivel = 100 - res[0].valorEmUso 

    dados.datasets.forEach(registro => {
        registro.data.push(qtdDisponivel, res[0].valorEmUso)
    })

    const config = {
      type: "doughnut",
      data: dados,
    }
  
    let grafico = new Chart(chartRamTotem, config)
  
    // setTimeout(() => atualizarGraficoCpu(grafico, dataCpu))
}

const chartDiscoTotem = document.getElementById('chartDiscoTotem');
chartDiscoTotem.width = chartDiscoTotem.parentNode.clientWidth;
chartDiscoTotem.height = chartDiscoTotem.parentNode.clientHeight;

async function obterDadosGraficoDisco() {
    const idCompanhia = sessionStorage.ID_COMPANHIA;
    const idTotem = sessionStorage.ID_TOTEM;

    await fetch(`/medidas/usoDiscoAtual/${idTotem}/${idCompanhia}`, { cache: "no-store" })
        .then((result) => {
        if (result.ok) {
            result.json().then((res) => {
                plotarGraficoDisco(res)
            })
        } else {
            console.error("Nenhum dado encontrado ou erro na API");
        }
        })
        .catch((err) => {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${err.message}`);
        })
}

function plotarGraficoDisco(res) {
    let dados = {
      labels: ["Livre", "Ocupado"],
      datasets: [{
        label: "% de uso",
        data: [],
      }]
    }
  
    console.log("Registros coletados:", res);

    const qtdDisponivel = 100 - res[0].valorEmUso 

    dados.datasets.forEach(registro => {
        registro.data.push(qtdDisponivel, res[0].valorEmUso)
    })

    const config = {
      type: "doughnut",
      data: dados,
    }
  
    let grafico = new Chart(chartDiscoTotem, config)
  
    // setTimeout(() => atualizarGraficoCpu(grafico, dataCpu))
}