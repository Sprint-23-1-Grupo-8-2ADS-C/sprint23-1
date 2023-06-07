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
        /* 
        * Opção de 10 em 10 minutos:
        * labels: ['13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '14:00'],
        * data: [40,70,55,100,10,47,65],
        */
        labels: [
            '13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', 
            '13:35', '13:40', '13:45', '13:50', '13:55', '14:00'
        ],
        datasets: [{
            label: '% de uso',
            data: [40,70,55,100,10,47,65,15,99,45,69,23,01],
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