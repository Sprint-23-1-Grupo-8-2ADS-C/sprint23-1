

const chartCpu = document.getElementById('chartCpu');

  new Chart(chartCpu, {
    type: 'line',
    data: {
      labels: ['Totem 01', 'Totem 02', 'Totem 03', 'Totem 04'],
      datasets: [{
        label: '% de uso',
        data: [40,70,55,100],
        borderWidth: 1
      }]
    }
  });

  const chartArmazenamento = document.getElementById("chartArmazenamento");

  new Chart(chartArmazenamento, {
    type: 'bar',
    data: {
        labels: ['Totel 1', 'Totel 2', 'Totel 3'],
        datasets:[{
            label: '% de uso',
            data: [40,70,55],
            borderWidth: 1
        }]
    }, 
    options: {
        indexAxis: 'y',
      }
  })