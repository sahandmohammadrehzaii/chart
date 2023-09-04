const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['SAMSUNG', 'XIAOMI', 'APPLE', 'OPPO', 'VIVO', 'HUAWEI', 'MOTOROLA', 'Rrealme', 'TECNO', 'LG',],
        datasets: [{
            label: '# of Votes',
            data: [57900000, 52500000, 48900000, 33600000, 32500000, 14700000, 12600000, 11400000, 8200000, 6800000,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(0,250,154)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0,0,255)',
                'rgba(165,42,42)',
                'rgba(255,215,0)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(0,250,154)',
                'rgba(255, 159, 64, 1)',
                'rgba(0,0,255)',
                'rgba(165,42,42)',
                'rgba(255,215,0)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
