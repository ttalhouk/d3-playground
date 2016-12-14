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
    var scores = [
      { name: 'Alice', score: 96 },
      { name: 'Billy', score: 83 },
      { name: 'Cindy', score: 91 },
      { name: 'David', score: 96 },
      { name: 'Emily', score: 88 }
    ];
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

// var bar = d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('g')
//   .data(scores)
//   .enter()
//     .append('g')
//     .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');
//
// bar.append('rect')
//     .style('width', d => d.score)
//     .attr('class', 'bar')
//     // set on mouseover event handler callback using d(ata), i(ndex), elements (list of rect elements)
//     .on('mouseover', function (d, i, elements) {
//       // the item moused over is transformed in the x direction by 2x
//       d3.select(this).style('transform', 'scaleX(2)');
//       // all elements not hovered over have opacity decreased to .5
//       d3.selectAll(elements)
//         .filter(':not(:hover)')
//         .style('fill-opacity', 0.5);
//     })
//     // reverse on mouse out
//     .on('mouseout', function (d, i, elements) {
//       d3.select(this).style('transform', 'scaleX(1)');
//       d3.selectAll(elements)
//         .style('fill-opacity', 1);
//     });
//
// bar.append('text')
//   .attr('y', 20)
//   .text(function (d) {
//     return d.name;
//   });

// Code orginization using .call

// var bar = d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('g')
//   .data(scores)
//   .enter()
//     .append('g')
//     .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');
//
// // function to transform scale
// function scaleBar (selection, scale) {
//   selection.style('transform', 'scaleX(' + scale + ')');
// }
//
// // function to set fill color
// function setFill (selection, color) {
//   selection.style('fill', color);
// }
//
// // function to change opacity
// function fade (selection, opacity) {
//   selection.style('fill-opacity', opacity);
// }
//
// bar.append('rect')
//     .style('width', d => d.score)
//     .attr('class', 'bar')
//     .on('mouseover', function (d, i, elements) {
//       d3.select(this)
//         // calling the scaleBar and setFill functions
//         .call(scaleBar, 2)
//         .call(setFill, 'orange');
//
//       d3.selectAll(elements)
//         .filter(':not(:hover)')
//         // calling fade function
//         .call(fade, 0.5);
//     })
//     .on('mouseout', function (d, i, elements) {
//       d3.select(this)
//         .call(scaleBar, 1)
//         .call(setFill, 'lightgreen');
//
//       d3.selectAll(elements)
//         .call(fade, 1);
//     });

// Margin Convention
//
// set margin object with margins as keys
// var margin = { top: 10, right: 20, bottom: 25, left: 25 };
// // set width and height and subtract the related margins for the graphics element
// var width = 425 - margin.left - margin.right;
// var height = 625 - margin.top - margin.bottom;
//
// var svg = d3.select('.chart')
//   .append('svg')
//     // add margins back in to create the overall SVG
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .style('fill', 'lightgray')
//   // create a graphics element for the SVG
//   .append('g')
//     // set transform to offset per the margins
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);
// // add a rect to the graphics element
// svg.append('rect')
//   .attr('width', width / 2)
//   .attr('height', height)
//   .style('fill', 'lightblue')
//   .style('stroke', 'green');
// // make second rect and offset x by half the graphics element width
// svg.append('rect')
//   .attr('x', width / 2)
//   .attr('width', width / 2)
//   .attr('height', height)
//   .style('fill', 'lightblue')
//   .style('stroke', 'green');


// adding axis example

// var margin = { top: 10, right: 20, bottom: 60, left: 40 };
// var width = 425 - margin.left - margin.right;
// var height = 625 - margin.top - margin.bottom;
//
// var svg = d3.select('.chart')
//   .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//   .append('g')
//     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// svg.append('rect')
//   .attr('width', width)
//   .attr('height', height)
//   .style('fill', 'lightblue')
//   .style('stroke', 'green');
//
// // set y scale
// var yScale = d3.scaleLinear()
//   // domain sets the axis range
//   .domain([0, 100])
//   // reverse order so min value is at bottom ('height') and max is at top (0)
//   .range([height, 0]);
// // create axis using .axisLeft supplying it with the scale
// var yAxis = d3.axisLeft(yScale)
//   // you can adjust the number of ticks with .ticks(number)
//   .ticks(5);
//   // there are other arguments you can pass to ticks or if
//   // you need exact ticks .tickValues([val1, val2, ...])
// // add axis to chart using .call
// svg.call(yAxis);
//
// // sets x axis as a time scale
// var xScale = d3.scaleTime()
//   .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
//   .range([0, width]);
//
// var xAxis = d3.axisBottom(xScale)
//   .ticks(5)
//   .tickSize(10)
//   .tickPadding(5);
// svg
//   // move axis to bottom
//   .append('g')
//     .attr('transform', `translate(0, ${height})`)
//   .call(xAxis);

// View Box responsiveness

// var margin = { top: 10, right: 20, bottom: 30, left: 30 };
// var width = 400 - margin.left - margin.right;
// var height = 600 - margin.top - margin.bottom;
//
// var svg = d3.select('.chart')
//   .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     // pass svg to responsivefy
//     .call(responsivefy)
//   .append('g')
//     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// svg.append('rect')
//   .attr('width', width)
//   .attr('height', height)
//   .style('fill', 'lightblue')
//   .style('stroke', 'green');
//
// var yScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([height, 0]);
// var yAxis = d3.axisLeft(yScale);
// svg.call(yAxis);
//
// var xScale = d3.scaleTime()
//   .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 9)])
//   .range([0, width]);
//
// var xAxis = d3.axisBottom(xScale)
//   .ticks(5)
//   .tickSize(10)
//   .tickPadding(5);
// svg
//   .append('g')
//     .attr('transform', `translate(0, ${height})`)
//   .call(xAxis);

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
      var targetWidth = parseInt(container.style("width"));
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
  }
}

// building a bar chart

// var margin = { top: 10, right: 20, bottom: 60, left: 30 };
// var width = 400 - margin.left - margin.right;
// var height = 565 - margin.top - margin.bottom;
//
// var svg = d3.select('.chart')
//   .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .call(responsivefy)
//   .append('g')
//     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// var data = [
//   {score: 63, subject: 'Mathematics'},
//   {score: 82, subject: 'Geography'},
//   {score: 74, subject: 'Spelling'},
//   {score: 97, subject: 'Reading'},
//   {score: 52, subject: 'Science'},
//   {score: 74, subject: 'Chemistry'},
//   {score: 97, subject: 'Physics'},
//   {score: 52, subject: 'ASL'}
// ];
//
// var yScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([height, 0]);
// var yAxis = d3.axisLeft(yScale);
// svg.call(yAxis);
//
// // Band scale used with bar charts
// var xScale = d3.scaleBand()
//   // space between bars (in a percentage of a bar)
//   .padding(0.2)
//   // supply domain with an array of the data subjects using map
//   .domain(data.map(d => d.subject))
//   .range([0, width]);
//
// var xAxis = d3.axisBottom(xScale)
//   .ticks(5)
//   .tickSize(10)
//   .tickPadding(5);
// svg
//   .append('g')
//     .attr('transform', `translate(0, ${height})`)
//   .call(xAxis)
//   .selectAll('text')
//   .style('text-anchor', 'end')
//   // rotates text to 45deg
//   .attr('transform', 'rotate(-45)');
//
// // creates rectangles for each data point
// svg.selectAll('rect')
//   .data(data)
//   .enter()
//   .append('rect')
//   .attr('x', d => xScale(d.subject))
//   .attr('y', d => yScale(d.score))
//   // sets widths of bands based on data supplied to xScale
//   .attr('width', d => xScale.bandwidth())
//   .attr('height', d => height - yScale(d.score));

// Scatter Plot exercise

// var margin = { top: 10, right: 20, bottom: 30, left: 30 };
// var width = 400 - margin.left - margin.right;
// var height = 565 - margin.top - margin.bottom;
//
// var svg = d3.select('.chart')
//   .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .call(responsivefy)
//   .append('g')
//     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// // load data
// d3.json('../data/scatter_data.json', function (err, data) {
//   var yScale = d3.scaleLinear()
//     // pull life expectancy data for y axis domain
//     .domain(d3.extent(data, d => d.expectancy))
//     .range([height, 0])
//     .nice();
//   var yAxis = d3.axisLeft(yScale);
//   svg.call(yAxis);
//
//   var xScale = d3.scaleLinear()
//     // pull cost of health care cost data for x axis domain
//     .domain(d3.extent(data, d => d.cost))
//     .range([0, width])
//     // .nice makes the ticks on nice round numbers
//     .nice();
//
//   var xAxis = d3.axisBottom(xScale)
//     .ticks(5);
//   svg
//     .append('g')
//       .attr('transform', `translate(0, ${height})`)
//     .call(xAxis);
//
//   // use square root scalling for radius to make sizes managible
//   var rScale = d3.scaleSqrt()
//     // pull population data for radius domain
//     .domain([0, d3.max(data, d => d.population)])
//     .range([0, 40]);
//
//   // create graphics containers and select all the ball class elements
//   // add them to the circles variable
//   var circles = svg
//     .selectAll('.ball')
//     .data(data)
//     .enter()
//     .append('g')
//     // apply ball class
//     .attr('class', 'ball')
//     // set the elements to the x and y axis
//     .attr('transform', d => {
//       return `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`;
//     });
//
//   circles
//     // create circle element
//     .append('circle')
//     // set center default to (0,0)
//     .attr('cx', 0)
//     .attr('cy', 0)
//     // set radius based on population
//     .attr('r', d => rScale(d.population))
//     .style('fill-opacity', 0.5)
//     .style('fill', 'steelblue');
//
//   // create labels for the circles
//   circles
//     .append('text')
//     // centers texts
//     .style('text-anchor', 'middle')
//     .style('fill', 'black')
//     .attr('y', 4)
//     .text(d => d.code);
//
// });

// line chart example

// var margin = { top: 10, right: 20, bottom: 30, left: 30 };
// var width = 400 - margin.left - margin.right;
// var height = 565 - margin.top - margin.bottom;
//
// var svg = d3.select('.chart')
//   .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .call(responsivefy)
//   .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);
//
// d3.json('../data/line-chart_data.json', function (err, data) {
//   // parsing time data as formated for data
//   var parseTime = d3.timeParse('%Y/%m/%d');
//
//   // itterate over the data to transform
//   data.forEach(company => {
//     company.values.forEach(d => {
//       d.date = parseTime(d.date);
//       d.close = +d.close; // + converts to a numeric expression
//     });
//   });
//
//   // build x axis graphics container
//   var xScale = d3.scaleTime()
//     .domain([
//       d3.min(data, co => d3.min(co.values, d => d.date)),
//       d3.max(data, co => d3.max(co.values, d => d.date))
//     ])
//     .range([0, width]);
//   svg
//     .append('g')
//       .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(xScale).ticks(5));
//
//   // build y axis graphics container
//   var yScale = d3.scaleLinear()
//     .domain([
//       d3.min(data, co => d3.min(co.values, d => d.close)),
//       d3.max(data, co => d3.max(co.values, d => d.close))
//     ])
//     .range([height, 0]);
//   svg
//     .append('g')
//     .call(d3.axisLeft(yScale));
//
//   // // build line
//   // var line = d3.line()
//   //   .x(d => xScale(d.date))
//   //   .y(d => yScale(d.close))
//   //   // apply curve through data points
//   //   .curve(d3.curveCatmullRom.alpha(0.5));
//   //
//   // svg
//   //   .selectAll('.line')
//   //   .data(data)
//   //   .enter()
//   //   .append('path')
//   //   // apply line class for svg to select
//   //   .attr('class', 'line')
//   //   .attr('d', d => line(d.values))
//   //   .style('stroke', (d, i) => ['#FF9900', '#3369E8'][i])
//   //   .style('stroke-width', 2)
//   //   .style('fill', 'none');
// // Area Charts example
//
//   var area = d3.area()
//     .x(d => xScale(d.date))
//     // set bottom of the area to the min domain value
//     .y0(yScale(yScale.domain()[0]))
//     .y1(d => yScale(d.close));
//
//   svg
//     .selectAll('.area')
//     .data(data)
//     .enter()
//     .append('path')
//     .attr('class', 'area')
//     // pass data values to area function
//     .attr('d', d => area(d.values))
//     .style('stroke', (d, i) => ['#FF9900', '#3369E8'][i])
//     .style('stroke-width', 2)
//     .style('fill', (d, i) => ['#FF9900', '#3369E8'][i])
//     .style('fill-opacity', 0.5);
//
//
// });


// Transitions
// d3.select('#block')
//   .transition()
//     .duration(600)
//     .delay(750)
//     .ease(d3.easeBounceOut)
//     .style('width', '400px')
//   .transition()
//     .duration(600)
//     .ease(d3.easeBounceOut)
//     .style('height', '600px')
//   .transition()
//     .duration(2000)
//     .ease(d3.easeQuadOut)
//     .style('background-color', 'purple')

// Reusable Transitions

function go () {
  // t is a transition function with a delay and durration set to 1s
  var t = d3.transition()
    .delay(1000)
    .duration(1000);

  d3.selectAll('.block')
    .transition(t)
    .style('width', '400px');

  d3.select('.a')
    .transition(t)
    .style('background-color', 'orange');

  d3.select('.b')
    .transition(t)
    .style('background-color', 'blue');
}

// configure function sets up a t transition function with variable
// delay and duration
function configure (t, delay, duration) {
  return t.delay(delay).duration(duration);
}

function goNow () {
  d3.selectAll('.block')
    .transition()
    .call(configure, 1000, 1000)
    .style('height', '200px');
}
