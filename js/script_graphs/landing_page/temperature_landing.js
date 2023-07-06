
function generateTemperatureData() {
    var temperatureData = [];
    var currentTime = new Date().getTime();
  
    for (let i = 0; i < 15; i++) { // 36 rappresenta le ultime 72 ore divise ogni 2 ore
      var timestamp = currentTime - i * 2 * 60 * 60 * 1000; // timestamp di 2 ore fa
      var temperature = Math.round(Math.random() * 10 + 18); // temperatura casuale tra 18 e 28 gradi
      temperatureData.unshift({ timestamp, temperature }); // inserimento in testa all'array
    }
  
    return temperatureData;
  }

var temperatureData = generateTemperatureData();


var tmp_landing_options = {
    chart: {
      type: 'line',
      height: 320,
      zoom: {
        autoScaleYaxis: true
      },
      toolbar: {
        show: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'Temperature',
      data: temperatureData.map(data => data.temperature)
    }],
    title: {
      text: 'Temperature (last 72h)',
      align: 'left'
    },
    xaxis: {
      type: 'datetime',
      categories: temperatureData.map(data => data.timestamp),
      labels: {
        format: 'dd/MM'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature (°C)'
      }
    }
  }
  
  // Creazione del grafico con i dati e le opzioni specificate
  var tmp_landing_chart = new ApexCharts(document.querySelector("#graph-temp-landing"), tmp_landing_options);
  
  // Rendering del grafico
  tmp_landing_chart.render();