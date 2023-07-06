 
function renderTortaPPD(id_kit) {

  console.log("sono entrato nel PPD");

  var ppd_options = {
    series: [],
    title: {
      text: 'Percentuale di insoddisfazione',
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
  labels: ['PPD (%)'],
  };
  
  var ppd_chart = new ApexCharts(document.querySelector("#ppd-chart"), ppd_options);
  ppd_chart.render();
  
  
  $.ajax(
    {
        url: '/data/thermal?id_kit='+id_kit, //ID devi metterlo dopo
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
        var lista = [risposta.p];
        /*console.log("DATI PPD e altri ARRIVATI: "+lista)
        console.log("ASHRAE: "+risposta.ashrae)
        console.log("EUROPE: "+risposta.europe)*/
        ppd_chart.updateSeries(lista)
        $('#pmv_ashrae_val').html(risposta.n); //AGGIORNA CARD MODELLO ADATTIVO
        $('#pmv_europe_val').html(risposta.o);
        var percentage_comfort = 100 - risposta.v;
        $('#tc_out_range_val').html(percentage_comfort+ " %");
        $('#tdc_out_range_val').html(risposta.x+ " %");
        
        

        coloraCardsThermal();

        },
    }
  );



}


