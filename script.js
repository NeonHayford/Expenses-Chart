const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
      label: 'USD $',
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
      // borderColor: [
      //   'rgba(255, 26, 104, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      //   'rgba(0, 0, 0, 1)'
      // ],
      borderWidth: 0,
      borderRadius: 5,
      borderSkipped: false,
      barThickness: 33
      
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
          display: false,

          ticks: {
           display: false
          },
           grid: {
            borderColor : 'green', 
            drawOnChartArea:false,
            borderWidth: 3,
            drawBorder: false,
            display: false

            
           }
        },
        x: {
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
            display: false,
             lineWidth: 5
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0
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