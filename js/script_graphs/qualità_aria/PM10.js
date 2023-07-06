function renderPM10Graph(id, filter, dati){

    var pm10_options = {
      series: [],
    title: {
      text: 'Particolato (PM10)',
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
  
    var pm10chart = new ApexCharts(document.querySelector("#pm10-chart"), pm10_options);
    pm10chart.render();
  
  //POPOLAZIONE DINAMICA SECTION
  
  //PRENDERE Kit_Name.
  var uri_pm10 = "/data/pm10?id_kit="+id+"&filter="+filter;
  
  
    $.ajax(
      {
          url: uri_pm10, //ID devi metterlo dopo
          method: 'GET',
          contentType: "application/json",
          dataType: "json",
          success: function(risposta){		
          var dati = risposta.c.map(function (data) {
            return {
              x: new Date(data[0]), // converte il timestamp in una data JavaScript
              y: data[1]
            }
          });
          pm10chart.updateSeries([{
            data: dati
          }])
          },
      }
    );
  
  }
  
  
  