// Configuración global de colores para Chart.js (Dark Theme)
Chart.defaults.color = '#ccc';
Chart.defaults.borderColor = '#444';

const chartsConfig = [
  {
    id: 'chart1',
    label: 'Watts',
    data: [120, 150, 180, 170, 160, 200],
    backgroundColor: 'rgba(0, 173, 181, 0.2)', // Cyan Synkro
    borderColor: 'rgba(0, 173, 181, 1)'
  },
  {
    id: 'chart2',
    label: 'kWh',
    data: [2, 4, 6, 5, 7, 8],
    backgroundColor: 'rgba(252, 227, 138, 0.2)', // Amarillo suave
    borderColor: 'rgba(252, 227, 138, 1)'
  },
  {
    id: 'chart3',
    label: '°C',
    data: [25, 27, 29, 30, 28, 26],
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Rojo alerta
    borderColor: 'rgba(255, 99, 132, 1)'
  },
  {
    id: 'chart4',
    label: '%',
    data: [80, 75, 70, 85, 90, 95],
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul eléctrico
    borderColor: 'rgba(54, 162, 235, 1)'
  }
];

chartsConfig.forEach(config => {
  const ctx = document.getElementById(config.id).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      datasets: [{
        label: config.label,
        data: config.data,
        backgroundColor: config.backgroundColor,
        borderColor: config.borderColor,
        borderWidth: 2,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Hora (Tiempo Real)' } },
        y: { title: { display: true, text: config.label }, beginAtZero: true }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
});

// Lógica para simular el inicio de sesión en el Modal
function mostrarDashboard() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('dashboardUI').style.display = 'block';
}

function cerrarSesion() {
  document.getElementById('dashboardUI').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}
