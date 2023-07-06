function renderTemperature(id, filter){

  var tmp_options = {
    series: [],
  title: {
    text: 'Temperatura',
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


  var tmp_chart = new ApexCharts(document.querySelector("#temperatura-chart"), tmp_options);
  tmp_chart.render();
//POPOLAZIONE DINAMICA SECTION

//PRENDERE Kit_Name.
  var uri_temp = "/data/history/temperature?id_kit="+id+"&filter="+filter;


  $.ajax(
    {
        url: uri_temp, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){
        
        var dati = risposta.a.map(function (data) {
          return {
            x: new Date(data[0]), // converte il timestamp in una data JavaScript
            y: data[1]
          }
        });
        tmp_chart.updateSeries([{
          data: dati
        }])
        },
    }
  );

}



