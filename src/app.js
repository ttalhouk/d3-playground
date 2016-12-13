// (function () {
//   var body = document.querySelector('body');
//   body.style['fontFamily'] = 'monospace';
//   body.style['fontSize'] = '2em';
//   console.log = function (x) { body.innerText += x + '\n'; };
// }());

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
// var quantizeScale = d3.scaleQuantize()
//   .domain([0, 100])
//   .range(["red", "green"])
//
// console.log(quantizeScale(50));
// // domain is broken into the amount of range values so 0-49 is red, 50-100 is green
//
// console.log(quantizeScale.invertExtent("green"))


// Ordinal Scales

// var ordinalScale = d3.scaleOrdinal()
//   .domain(["poor", "good", "great"])
//   .range(["red", "white", "green"])
//
// console.log(ordinalScale("good"));
// // domain is mapped to the range poor >> red, good >> white, great >> green
// // this is based on position in the array

// Load and Inspect data

// data parsing
// d3.csv('data/data.csv', function(data){
//   console.log(data);
// })
//
// d3.tsv('data/data.tsv', function(data){
//   console.log(data);
// })
//
//
// d3.json('data/data.json', function (data) {
//   // collect the upper and lower age values in extent
//   var extent = d3.extent(data, function (d) {
//     return d.age;
//   });
//   console.log(extent); // [13,38]
//
//   // set scale of ages using the extent value
//   var scale = d3.scaleLinear()
//     .domain(extent)
//     .range([0, 600]);
//   console.log(scale(37)); // 576
//
//   // collect all unique values of ages in the dataset
//   var ages = d3.set(data, function (d) {
//     return d.age;
//   });
//   console.log(ages.values());
// })

// Selecting the DOM

// // selecting first div
// var div = d3.select('div');
// console.log(div.nodes());
//
// // selecting all a tags in the div
// var divLinks = div.selectAll('a');
// console.log(divLinks.nodes());
//
// // selecting the second a tag
// var secondLink = d3.selectAll('a:nth-child(2)');
// console.log(secondLink.nodes());
//
// // selecting all links
// var allLinks = d3.selectAll(document.links);
// console.log(allLinks.size()); // 4

// Manipulating the DOM

// var secondLink = d3.selectAll('a:nth-child(2)')
// // set href to google.com
// secondLink.attr('href', 'http://google.com');
// console.log(secondLink.attr('href'));
//
// var secondLink = d3.selectAll('a:nth-child(2)')
//   // .style('color', 'red');
//   .classed('red', true)
//   // .text('Inventory')
//   .html('inventory <b>SALE</b>')

// Creating DOM elements

d3.select('.title')
  .append('div')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .style('display', 'block')
    .text('submit');
