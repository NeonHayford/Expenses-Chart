async function main(){
  const fetchdata=await fetch('./data.json');
  const datafeed=await fetchdata.json();
  console.log(datafeed);
  
  const data = {
    labels: datafeed.map(item => item.day),
    datasets: [{
      label: '',
       fontFamily: 'DM Sans',
      data: datafeed.map(item => item.amount),
      backgroundColor: [
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(118, 181, 188, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)'
      ],
      outerHeight: 177,
      borderWidth: 0,
      borderRadius: 5,
      borderSkipped: false,
      // barThickness: 50.36,
    }]
  };
  
  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      maintainAspectRatio: false,
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
            border: {
              display: false,
            },
          ticks:{
              display: true,
              // display: true,
              font: {
                size: 15,
            }
          }, 
          grid: {
            drawTicks:false,
            drawBorder: false,
            display: false,
            lineWidth: 0,
            drawOnChartArea: true,
          },
        }
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: false,
          }
        },
        tooltip:{
          borderRadius: 0,
          backgroundColor: '#382314',
          yAlign:'bottom', 
          displayColors: false, 
          
          labelPointStyle: function(context){
             return{
              // PointStyle: false,
              rotation: 0
            }
           },
          callbacks: {
            title: function(context){
              return '';
              // return console.log(context);
            },
          },
        },
      }
    }
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config,
  );
  }
  main()