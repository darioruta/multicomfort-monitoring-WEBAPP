function renderTortaCo2Out(id_kit, totale) {

    console.log("sono entrato update CO2 OUT Torta");
  
    var options_radial_co2 = {
      series: [],
      title: {
        text: '% ore CO2 fuori limite (settimanale)',
        align: 'center',
      },
      chart: {
      height: 300,
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
    labels: ['Totale (%)'],
    };
    
    var chart_radial_co2 = new ApexCharts(document.querySelector("#co2-out-torta"), options_radial_co2);
    chart_radial_co2.render();
    chart_radial_co2.updateSeries(totale);
    
    
    /*$.ajax(
      {
          url: '/data/overall_section?id_kit='+id_kit, //ID devi metterlo dopo
          method: 'GET',
          contentType: "application/json",
          dataType: "json",
          success: function(risposta){		
          //var dati = risposta.overall_comfort;
          //var totale = dati.totale
          var totale = risposta.i
          chart_radial.updateSeries(totale)
          },
      }
    );
    */
  
  }
  