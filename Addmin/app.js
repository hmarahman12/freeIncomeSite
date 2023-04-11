const min_icon = document.querySelector(".min_icon i");
const background = document.querySelector(".background");
const span = document.querySelectorAll(".icon span");
const i = document.querySelectorAll(".icon i");
const dashBoard = document.querySelector(".dashBoard");
const img1 = document.querySelector("img");
const icon = document.querySelectorAll(".icon");
const box = document.querySelectorAll(".box");

min_icon.addEventListener('click',function(){
    min_icon.classList.toggle("fa-times")
    background.classList.toggle("backgrounddd")
    img1.classList.toggle("backgroundimg")

    span.forEach(function(span){
        span.classList.toggle("backgroundspan")
    })
    i.forEach(function(i){
        i.classList.toggle("backgroundi")
    })
    icon.forEach(function(icon){
        icon.classList.toggle("backgroundicon")
    });

    box.forEach(function(box_hover){
        box_hover.classList.toggle("box-js")
    });

    dashBoard.classList.toggle("dash-boardjs")
    
});




//apex chart
let category = {
    series: [{
    name: 'series1',
    data: [1,40,28,51,42,109,60]
  }, {
    name: 'series2',
    data: [11,32,45,32,34,52,41]
  },{
    name: 'series2',
    data: [5,0,10,0,20,10,30]
  },{
    name: 'series2',
    data: [0,30,20,30,10,5,20]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  let chartcategory_chart = new ApexCharts(document.querySelector(".category_chart"), category);
  chartcategory_chart.render();





