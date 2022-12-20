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
     document.getElementById('myChart'),
     config
   );


   <!-- <div>
                        <p class="p-label"  aria-hidden="true">17.45</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Mon</div>
                        </div>
                    </div>
                    <div>
                        <p class="p-label"  aria-hidden="true">34.91</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Tue</div>
                        </div>
                    </div>
                    <div>
                        <p class="p-label"aria-hidden="true">52.46</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Wed</div>
                        </div>
                    </div>
                    <div>
                        <p class="p-label" aria-hidden="true">31.07</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Thu</div>
                        </div>
                    </div>
                    <div>
                        <p class="p-label" aria-hidden="true">23.39</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Fri</div>
                        </div>
                    </div>
                    <div>
                        <p class="p-label" aria-hidden="true">43.28</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Sat</div>
                        </div>
                        
                    </div>
                     -->
                    <!-- <div>
                        <p class="p-label" aria-hidden="True">25.48</p>
                        <div class="chart_dic">
                            <div class="value"></div>
                            <div class="title">Sun</div>
                        </div>
                    </div> -->