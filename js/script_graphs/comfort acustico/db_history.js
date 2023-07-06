function renderDecibel(id, filter){

  var db_history_options = {
    series: [],
  title: {
    text: 'Decibel (db)',
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

  var db_history_chart = new ApexCharts(document.querySelector("#history-db-chart"), db_history_options);
  db_history_chart.render();


//POPOLAZIONE DINAMICA SECTION

//PRENDERE Kit_Name.
var uri_db = "/data/history/db?id_kit="+id+"&filter="+filter;


  $.ajax(
    {
        url: uri_db, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
        var dati = risposta.f.map(function (data) {
          return {
            x: new Date(data[0]), // converte il timestamp in una data JavaScript
            y: data[1]
          }
        });
        db_history_chart.updateSeries([{
          data: dati
        }])
        },
    }
  );

}





