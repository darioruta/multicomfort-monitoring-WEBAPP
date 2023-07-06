
function renderTortaNoise(id){
  var db_options = {
    series: [],
    title: {
        text: 'Percentuale di rumore - tempo reale',
        align: 'center',
      },
    chart: {
    height: 250,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  noData: {
    text:'Loading..'
  },
  fill: {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
    },
  },
  stroke: {
    dashArray: 4
  },
  labels: ['Noise'],
  };

  var db_chart = new ApexCharts(document.querySelector("#db-chart"), db_options);
  db_chart.render();


  //INIZIO SECONDO PLOT
  var sopra_soglia_options = {
    series: [],
    chart: {
    height: 250,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  noData: {
    text: 'Loading...'
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
        hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ce3232'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Ore (%)'],
  };
  
  var sopra_soglia_chart = new ApexCharts(document.querySelector("#db-sopra-soglia"), sopra_soglia_options);
  sopra_soglia_chart.render();
  
  
  $.ajax(
    {
        url: '/data/noise?id_kit='+id, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){
        var rumore_perc = Math.round(((risposta.f/75)*100)*10)/10;	
        var lista = [rumore_perc];
        var lista2 = [risposta.u+ 0.6];
        db_chart.updateSeries(lista);
        sopra_soglia_chart.updateSeries(lista2);
 

        },
    }
  );





}



