// Exemplu pentru Chart.js - grafice pentru pași zilnici
const ctx = document.getElementById('stepsChart').getContext('2d');
const stepsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri'],
        datasets: [{
            label: 'Pași',
            data: [3000, 5000, 7000, 9000, 6000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
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
