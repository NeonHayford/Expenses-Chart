const data = {
  labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  datasets: [{
    label: '',
    fontFamily: 'DM Sans',

    data: [ 17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    backgroundColor: [
      'rgba(236, 117, 93, 1)',
      'rgba(236, 117, 93, 1)',
      'rgba(118, 181, 188, 1)',
      'rgba(236, 117, 93, 1)',
      'rgba(236, 117, 93, 1)',
      'rgba(236, 117, 93, 1)',
      'rgba(236, 117, 93, 1)'
    ],
    borderWidth: 0,
    borderRadius: 5,
    borderSkipped: false,
    barThickness: 50.36,
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    
    scales: {

      
      y: {
        beginAtZero: true,
        backgroundColor: null,
        display:false,
          
        ticks: {
         display: false,
        
        },
         grid: {
          drawTicks:false,
          drawOnChartArea:false,
          borderWidth: 0,
          drawBorder: false,
          display: false,
         }
      },
      x: {
          // display:false,
        ticks:{
            display: true,
            // display: true,
        }, 

        grid: {
          drawTicks:false,
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
          lineWidth: 0,
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            fontFamily:'DM Sans',
          },
          boxWidth: 0,
        }
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
  
);