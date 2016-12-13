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

// Quantize Scales
var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "green"])

console.log(quantizeScale(50));
// domain is broken into the amount of range values so 0-49 is red, 50-100 is green

console.log(quantizeScale.invertExtent("green")) 
