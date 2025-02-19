document.addEventListener('DOMContentLoaded', function () {
    // Distance Over Time Chart
    var ctxDistance = document.getElementById('distanceChart').getContext('2d');
    var distanceChart = new Chart(ctxDistance, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                label: 'Distance (km)',
                data: [10, 15, 20, 25, 30],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Weekly Distance Progress'
                }
            }
        }
    });

    // Pace Improvement Chart
    var ctxPace = document.getElementById('paceChart').getContext('2d');
    var paceChart = new Chart(ctxPace, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                label: 'Pace (min/km)',
                data: [6.5, 6.3, 6.1, 5.8, 5.5],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Weekly Pace Improvement'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
