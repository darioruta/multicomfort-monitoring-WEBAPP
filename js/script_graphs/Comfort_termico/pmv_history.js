
function renderPMV(id_kit, filter){
  var pmv_options = {
    series: [],
    chart: {
    type: 'line',
    height: 300
  },
  stroke: {
    curve: 'stepline',
  },
  noData: {
    text: 'Loading...'
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy hh:mm'
    }
  },
  title: {
    text: 'PMV - EUROPE',
    align: 'center',
  },
  annotations: {
    yaxis: [{
      y: -1,
      borderColor: '#999',
      label: {
        show: true,
        text: 'Soglia Ottimale',
        style: {
          color: "#fff",
          background: '#ABE5A1'
        }
      }
    },
    {
      y: 1,
      borderColor: '#999',
      label: {
        show: true,
        text: 'Soglia Ottimale',
        style: {
          color: "#fff",
          background: '#ABE5A1'
        }
      }
    }
    ]
  },
  };

  var pmv_chart = new ApexCharts(document.querySelector("#pmv-chart"), pmv_options);
  pmv_chart.render();

  $.ajax(
    {
        url: '/data/history/pmv?id_kit='+id_kit+'&filter='+filter, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){	
          console.log("timeserie pmv arrivata: "+ risposta)
          var dati = risposta.o.map(function (data) {
            return {
              x: new Date(data[0]), // converte il timestamp in una data JavaScript
              y: data[1]
            }
          });
          pmv_chart.updateSeries([{
            data: dati
          }])
          },
    }
  );


}

