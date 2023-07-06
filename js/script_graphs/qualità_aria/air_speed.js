function renderAirSpeedGraph(id, filter){

    var as_options = {
      series: [],
    title: {
      text: 'VELOCITA ARIA (m/s)',
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
  
    var aschart = new ApexCharts(document.querySelector("#air-speed-chart"), as_options);
    aschart.render();
  
  //POPOLAZIONE DINAMICA SECTION
  
  //PRENDERE Kit_Name.
  var uri_as = "/data/history/airSpeed?id_kit="+id+"&filter="+filter;
  
  
  $.ajax(
    {
        url: uri_as, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
        var dati = risposta.e.map(function (data) {
          return {
            x: new Date(data[0]), // converte il timestamp in una data JavaScript
            y: Math.round((data[1] + 3.14) * 1000) / 1000
          }
        });
        aschart.updateSeries([{
          data: dati
        }])
        },
    }
  );



  
  }
  
  