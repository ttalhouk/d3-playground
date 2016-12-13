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

// d3.select('.title')
//   .append('div')
//     .style('color', 'red')
//     .html('Inventory <b>SALE</b>')
//   .append('button')
//     .style('display', 'block')
//     .text('submit');
//

// Data visualization
    // var scores = [
    //   { name: 'Alice', score: 96 },
    //   { name: 'Billy', score: 83 },
    //   { name: 'Cindy', score: 91 },
    //   { name: 'David', score: 96 },
    //   { name: 'Emily', score: 88 }
    // ];
    //
    // var update = d3.select('.chart')
    //   .selectAll('div')
    //   .data(scores, function (d) {
    //     return d ? d.name : this.innerText;
    //   })
    //   .style('color', 'blue');
    //
    // var enter = update.enter()
    //   .append('div')
    //   .text(function (d) {
    //     return d.name;
    //   })
    //   .style('color', 'green');
    //
    // update.exit().remove();
    //
    // update.merge(enter)
    //   .style('width', d => d.score + 'px')
    //   .style('height', '50px')
    //   .style('background', 'lightgreen')
    //   .style('border', '1px solid black')

// SVG example

var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

// d3.select('.chart')
//   // create SVG Element
//   .append('svg')
//     // add attributes to the SVG element within .chart
//     .attr('width', 225)
//     .attr('height', 300)
//   // make the elements into svg rect elements
//   .selectAll('rect')
//   .data(scores)
//   .enter()
//     .append('rect')
//     // after appending a rect add y height to space them out
//     .attr('y', (d, i) => i * 33)
//     .style('width', d => d.score)
//     .text(function (d) {
//       return d.name;
//     })
//     .attr('class', 'bar');


// Working with SVG containers

// var bar = d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('g')
//   .data(scores)
//   .enter()
//     // creating g elements "graphic element" to allow text to be added
//     .append('g')
//     // can't use Y spacing for g elements
//     // instead transform and translate ordinally
//     .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');
//
// // rect is drawn inside the g element
// bar.append('rect')
//     .style('width', d => d.score)
//     .attr('class', 'bar');
// // text added to g element
// bar.append('text')
//   .attr('y', 20)
//   .text(function (d) {
//     return d.name;
//   });

// Interactive elements

var bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');

bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')
    // set on mouseover event handler callback using d(ata), i(ndex), elements (list of rect elements)
    .on('mouseover', function (d, i, elements) {
      // the item moused over is transformed in the x direction by 2x
      d3.select(this).style('transform', 'scaleX(2)');
      // all elements not hovered over have opacity decreased to .5
      d3.selectAll(elements)
        .filter(':not(:hover)')
        .style('fill-opacity', 0.5);
    })
    // reverse on mouse out
    .on('mouseout', function (d, i, elements) {
      d3.select(this).style('transform', 'scaleX(1)');
      d3.selectAll(elements)
        .style('fill-opacity', 1);
    });

bar.append('text')
  .attr('y', 20)
  .text(function (d) {
    return d.name;
  });
