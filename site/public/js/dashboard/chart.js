
//GRÁFICOS INDEX DASHBOARD
var genericOptions = {
  fill: false,
  interaction: {
    intersect: false
  },
  radius: 0,
}


const chartCpu = document.getElementById('chartCpu');
chartCpu.width = chartCpu.parentNode.clientWidth;
chartCpu.height = chartCpu.parentNode.clientHeight;

async function obterDadosGraficoCpu() {
  const idCompanhia = sessionStorage.ID_COMPANHIA

  await fetch(`/medidas/ultimoUsoCpu/${idCompanhia}`, { cache: "no-store" })
    .then((result) => {
      if (result.ok) {
        result.json().then((res) => {
          plotarGraficoCpu(res)
        })
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch((err) => {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${err.message}`);
    })
}

function plotarGraficoCpu(res) {
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
    labels.push(`Totem ${registro.fkTotem}`)
    dados.datasets.forEach(dataset => {
      dataset.data.push(registro.valorUsoCpu)
    });
  });

  const config = {
    type: "line",
    data: dados,
    options: genericOptions
  }

  let grafico = new Chart(chartCpu, config)

  // setTimeout(() => atualizarGraficoCpu(grafico, dados), 5000)
}

const chartArmazenamento = document.getElementById("chartArmazenamento");
chartArmazenamento.width = chartArmazenamento.parentNode.clientWidth;
chartArmazenamento.height = chartArmazenamento.parentNode.clientHeight;

async function obterDadosGraficoDisco() {
  const idCompanhia = sessionStorage.ID_COMPANHIA

  await fetch(`/medidas/usoDisco/${idCompanhia}`, { cache: "no-store" })
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
    labels.push(`Totem ${registro.fkTotem}`)
    dados.datasets.forEach(dataset => {
      dataset.data.push(registro.valorUsoDisco)
    });
  });

  const config = {
    type: "bar",
    data: dados,
    options: {
      indexAxis: 'y',
      scales: {
        y: {
            grid: {
              offset: true
            }
        }
      }
    }
  }

  let grafico = new Chart(chartArmazenamento, config)

  // setTimeout(() => atualizarGraficoCpu(grafico, dataCpu))
}