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

new Chart(chartCpuTotem, {
type: 'line',
data: {
    labels: ['13:00', '14:00', '15:00', '16:00'],
    datasets: [{
    label: '% de uso',
    data: [40,70,55,100],
    borderWidth: 1
    }]
}, 
options: genericOptions, 
responsive: false
});


const chartRamTotem = document.getElementById('chartRamTotem');
chartRamTotem.width = chartRamTotem.parentNode.clientWidth;
chartRamTotem.height = chartRamTotem.parentNode.clientHeight;

new Chart(chartRamTotem, {
type: 'doughnut',
data: {
    labels: ['Livre', 'Ocupado'],
    datasets: [{
    label: '% de uso',
    data: [30,70],
    }]
}
});


const chartDiscoTotem = document.getElementById('chartDiscoTotem');
chartDiscoTotem.width = chartDiscoTotem.parentNode.clientWidth;
chartDiscoTotem.height = chartDiscoTotem.parentNode.clientHeight;

new Chart(chartDiscoTotem, {
type: 'doughnut',
data: {
    labels: ['Livre', 'Ocupado'],
    datasets: [{
    label: '% de uso',
    data: [30,70],
    }]
}
});