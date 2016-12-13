(function () {
  var body = document.querySelector('body');
  body.style['fontFamily'] = 'monospace';
  body.style['fontSize'] = '2em';
  console.log = function (x) { body.innerText += x + '\n'; };
}());

// LinearScale example

// var linearScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([0, 1])
//   .clamp(true);
//
// // clamp fixes maximum/minimum values

// Converting Dates (TimeScale)

// var timeScale = d3.scaleTime()
//   .domain([new Date(2016, 0, 1), new Date()])
//   .range([0,100])
//
// console.log(timeScale(2016, 4, 15));
