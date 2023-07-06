function renderCo2Graph(id, filter){

  var co2_options = {
    series: [],
  title: {
    text: 'CO2',
    align: 'center',
  },
    chart: {
    id: 'area-datetime',
    type: 'area',
    height: 300,
    zoom: {
      autoScaleYaxis: true
    }
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
  annotations: {
    yaxis: [{
      y: 50,
      borderColor: '#999',
      label: {
        show: true,
        text: 'Soglia massima',
        style: {
          color: "#fff",
          background: '#ce3232'
        }
      }
    }]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  };

  var co2chart = new ApexCharts(document.querySelector("#co2-chart"), co2_options);
  co2chart.render();

//POPOLAZIONE DINAMICA SECTION

//PRENDERE Kit_Name.
var uri_co2 = "/data/co2?id_kit="+id+"&filter="+filter;


  $.ajax(
    {
        url: uri_co2, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
          
       var dati = risposta.d.map(function (data) {
          return {
            x: new Date(data[0]), // converte il timestamp in una data JavaScript
            y: data[1]
          }
        });
        co2chart.updateSeries([{
          data: dati
        }])
        },
    }
  );

}


