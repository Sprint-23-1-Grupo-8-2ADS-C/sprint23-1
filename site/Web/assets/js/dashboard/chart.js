
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
new Chart(chartCpu, {
  type: 'line',
  data: {
    labels: ['Totem 01', 'Totem 02', 'Totem 03', 'Totem 04'],
    datasets: [{
      label: '% de uso',
      data: [40,70,55,100],
      borderWidth: 1
    }]
  }, 
  options: genericOptions
});


const chartArmazenamento = document.getElementById("chartArmazenamento");
chartArmazenamento.width = chartArmazenamento.parentNode.clientWidth;
chartArmazenamento.height = chartArmazenamento.parentNode.clientHeight;

new Chart(chartArmazenamento, {
  type: 'bar',
  data: {
      labels: ['Totel 1', 'Totel 2', 'Totel 3', 'Totel 4'],
      datasets:[{
          label: '% de uso',
          data: [40,70,55,10],
          borderWidth: 1,
      }]
  }, 
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
})