const data = fetch('data.json')
    .then(
        response => response.json()
        )
    .then(
        data => {
            console.log(data);
            return data;
                }
        )
    .catch(console.error());

let chartbox = document.querySelector('chart')

data.then(data => {
    data.forEach(item => {
        let chart_dic = document.createElement('div');
        chart_dic.classList.add('chart_dic');
        chart_dic.innerHTML = '<div class="Wrapper"><div class="value">$[item.amount]</div></div><div class="title">$[item.day]</div>';
        // chartbox.appendChild(chart_dic);
    })
    
})