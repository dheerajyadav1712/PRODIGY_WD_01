// Data for each chart

// Chart 1: Running Progress (Distance Over Time)
var ctx1 = document.getElementById('runProgressChart').getContext('2d');
var runProgressChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Distance (km)',
            data: [10, 15, 20, 25, 30, 35, 40],
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
                text: 'Running Distance Progress (2024)'
            }
        }
    }
});

// Chart 2: Time Spent Running (Monthly Overview)
var ctx2 = document.getElementById('timeSpentChart').getContext('2d');
var timeSpentChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Time Spent (hours)',
            data: [5, 8, 9, 12, 15, 18, 20],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Time Spent Running per Month'
            }
        }
    }
});

// Chart 3: Speed (Average Speed)
var ctx3 = document.getElementById('speedChart').getContext('2d');
var speedChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Speed (km/h)',
            data: [8, 9, 10, 10.5, 11, 12, 12.5],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Average Speed Over Time'
            }
        }
    }
});

// Chart 4: Calories Burned
var ctx4 = document.getElementById('caloriesChart').getContext('2d');
var caloriesChart = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['Calories Burned', 'Remaining Calories'],
        datasets: [{
            data: [1200, 800],
            backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(201, 203, 207, 1)']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Calories Burned This Month'
            }
        }
    }
});

// Chart 5: Upcoming Events (Event Count)
var ctx5 = document.getElementById('eventsChart').getContext('2d');
var eventsChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Next Week', 'Next Month', 'Upcoming Year'],
        datasets: [{
            label: 'Events',
            data: [2, 5, 10],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Upcoming Events in 2024'
            }
        }
    }
});

// Chart 6: Monthly Average (Distance)
var ctx6 = document.getElementById('monthlyAverageChart').getContext('2d');
var monthlyAverageChart = new Chart(ctx6, {
    type: 'radar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Average (km)',
            data: [12, 16, 18, 21, 25, 30, 34],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Average Running Distance'
            }
        }
    }
});
