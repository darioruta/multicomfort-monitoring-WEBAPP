var pmv_land_options = {
    series: [{
    data: [3,4,5,6,3,2,3,2,1,4,5,6,6,4,3]
  }],
    chart: {
    type: 'line',
    height: 320
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'PMV',
    align: 'center'
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  }
  };

  var pmv_land_chart = new ApexCharts(document.querySelector("#graph-comf-landing"), pmv_land_options);
  pmv_land_chart.render();
