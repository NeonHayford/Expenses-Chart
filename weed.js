const ctx=document.getElementById('Chart');
fetchData();
   async function fetchData() {
      const res = await fetch('data.json');
      const data = await res.json();
      console.log(data);
      length = data.length;
      console.log(length);
      labels = [];
      values = [];
   for (i = 0; i < data.length; i++) {
         labels.push(data[i].day);
         values.push(data[i].amount);
        /*console.log(values[i])*/
      };
      new Chart(ctx, {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
               {
                  label:'',
                 backgroundColor: [
                     'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
               'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'],
                  data: values
               }
            ]
         },
         options: {
             responsive: true,
             interaction: {
             intersect: false
         },
         plugins: {
           title: {
           display: true,
           align: 'start',
           text: 'Spending - Last 7 days',
           font: {
              size: 25
          }, 
        color: 'hsl(25, 47%, 15%)'
      },
      legend: {
      display: false
      },
     tooltip:{
         
        displayColors: false,
       
        callbacks: {
             title:()=>{
                      display:false
              },
/*from Chart js tutorial: adding '$' to label */
              label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    } 
        }
     }
        },
    scales: {
      x: {
         
        stacked: true,
         grid: {
            display: false
        }
      },
      y: {
        stacked: true,
        ticks: {
            display:false,
         
        },
        grid: {
            display: false
        }
      }
    }
         }
      })
   }