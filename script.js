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
 document.getElementById('Chart'),
 config
);







// const data = fetch('data.json')
//     .then(
//         response => response.json()
//         )
//     .then(
//         data => {
//             console.log(data);
//             return data;
//                 }
//         )
//     .catch(error => console.error(error));

// let chartbox = document.querySelector('chart')

// data.then(data => {
//     data.forEach(item => {
//         let chart_dic = document.createElement('div');
//             chart_dic.classList.add('chart_dic');
//         // chartbox.appendChild(chart_dic);
//         // let chart = document.createElement('div');
//         //  chart.classList.add('chart');
//          const height = item.amount / 7;
//          let value=""
//          if (item.day == "wed") {
//              value=`<div class="value active" style="--height:${height}em"></div>`
//          } else {
//              value =`<div class="value" style="--height:${height}em"></div>`;
//          }
//          chart.innerHTML = `
//          <div class="wrapper ">${value}</div>
//          <div class="title">${item.day}</div>
//          `;
        
//          chartContainer.appendChild(chart);
//     })
    
// })

