function renderLux(id, filter){

  var lux_hist_options = {
    series: [],
  title: {
    text: 'LUX',
    align: 'center',
  },
    chart: {
    id: 'area-datetime',
    type: 'area',
    height: 280,
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

  var lux_hist_chart = new ApexCharts(document.querySelector("#lux-history-chart"), lux_hist_options);
  lux_hist_chart.render();

//POPOLAZIONE DINAMICA SECTION

//PRENDERE Kit_Name.
var uri_lux = "/data/history/lux?id_kit="+id+"&filter="+filter;


  $.ajax(
    {
        url: uri_lux, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
        var dati = risposta.g.map(function (data) {
          return {
            x: new Date(data[0]), // converte il timestamp in una data JavaScript
            y: data[1]
          }
        });
        lux_hist_chart.updateSeries([{
          data: dati
        }])
        },
    }
  );

  

}







