// var dataset = [ 5, 10, 15, 20, 25, 40 ];

// example 1
 // d3.select('body').selectAll('div')
 //   .data(dataset)
 //   .enter()
 //   .append('div')
 //   .attr('class', 'bar')
 //   .style('height', function (d) {
 //     return d * 5 + 'px';
 //   });

   // .data(specified_dataset) for chart
   // .enter allows for appending the dom
   // .append(tag) adds tag (div in this case)
   // .attr(attr, name) add attribute to the tag (in this case class='bar')
   // .style(style_attr, value)  value is using each element in the dataset
   // and setting the height to the function

// Example 2

//  var svg = d3.select('#chartArea').append('svg')
//    .attr('width', 400)
//    .attr('height', 300);
//
// // Sets the height and width of the chart SVG element
//
//  var multiplier = 8;
//
//  // Sets a scale multiplier for the data
//
//  svg.selectAll('rect')
//    .data(dataset)
//    .enter()
//    .append('rect')
//    .attr('class', 'bar')
//    .attr('x', function (d, i) {
//      return i * 22;
//    })
//    .attr('y', function (d) {
//      return 300 - d * multiplier;
//    })
//    .attr('width', 20)
//    .attr('height', function (d) {
//      return d * multiplier;
//    });

// now that it is an SVG element we no longer change the chart with styles.
// chart is set to "rect"
// attr 'x' is the chart's x direction each item is spaced 22px appart
// from the previous one
// attr 'y' sets the starting height this is currently set to start the bars
// from the bottom (defaults from the top)
// attr 'width/height' are the height and widths of the bars.

// Example 3

// var dataset = [ 5, 10, 15, 20, 25, 46, 36, 24, 36 ];
// var w = 400, h = 300;
// // sets the width and height of the chart
//
// var svg = d3.select('#chartArea').append('svg')
//   .attr('width', w)
//   .attr('height', h);
//
// var yScale = d3.scale.linear()
//   .domain([0, 50])
//   .range([0, h]);
//
// // sets the y scaling
// // .domain is the boundaries for the dataset you are looking at
// // .range is the scaling of the data to the height of the chart.
//
// var multiplier = 5;
//
// svg.selectAll('rect')
//   .data(dataset)
//   .enter()
//   .append('rect')
//   .attr('class', 'bar')
//   .attr('x', function (d, i) {
//     return i * 22;
//   })
//   .attr('y', function (d) {
//     return h - yScale(d);
//   })
//   .attr('width', 20)
//   .attr('height', function (d) {
//     return yScale(d);
//   });

  // Example 4
  //
  // var dataset = _.map(_.range(15), function (i ) {
  //   return Math.random() * 5000;
  // });
  //
  // // Gets a random sampling of 15 data points from 0-5000
  //
  // var w = 400, h = 300;
  //
  // var svg = d3.select('#chartArea').append('svg')
  //   .attr('width', w)
  //   .attr('height', h);
  //
  // var yScale = d3.scale.linear()
  //   .domain([0, d3.max(dataset) * 1.1])
  //   .range([0, h]);
  //
  // // .max pulls the max item from the data set for the domain
  // // * 1.1 adds padding on top
  //
  // var multiplier = 5;
  //
  // svg.selectAll('rect')
  //   .data(dataset)
  //   .enter()
  //   .append('rect')
  //   .attr('class', 'bar')
  //   .attr('x', function (d, i) {
  //     return i * 22;
  //   })
  //   .attr('y', function (d) {
  //     return h - yScale(d);
  //   })
  //   .attr('width', 20)
  //   .attr('height', function (d) {
  //     return yScale(d);
  //   });


// Example 5 and 6 (xScale and colorScale)

var dataset = _.map(_.range(20), function (i ) {
    return Math.random() * 500;
  });
var w = 400, h = 300;

var svg = d3.select('#chartArea').append('svg')
.attr('width', w)
.attr('height', h);

var xScale = d3.scale.ordinal()
.domain(dataset)
.rangeBands([0, w], 0.1, 0.3);

// xScale ordinal uses the amout of dataset elements and sets the width
// first argument is the width of the chart
// second is the spacing between bars
// third is spacing on the edges (front and back)

var yScale = d3.scale.linear()
.domain([0, d3.max(dataset) * 1.1])
.range([0, h]);

var colorScaleMax = d3.scale.linear()
  .domain([0, d3.max(dataset)])
  .range(['orange', 'purple']);

// Blends the colors starting based on value from orange to purple

var colorScaleLength = d3.scale.linear()
  .domain([0, dataset.length])
  .range(['yellow', 'green']);

// Blends the colors starting at yellow and ending on green

var multiplier = 5;

svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('class', 'bar')
.attr('x', function (d, i) {
  return xScale(d);
})
.attr('y', function (d) {
  return h - yScale(d);
})
.attr('width', xScale.rangeBand())
.attr('height', function (d) {
  return yScale(d);
})
.attr('fill', colorScaleMax);

// .attr('fill', function (d, i) {
//   return colorScaleLength(i);
// });

// ordinal xScale allows for rangeBand to be used to set the bars and the scaleing for the width and x attribute
// Apply the color scale Length using the fill attr on the yScale
// Apply colorScaleMax to set the fill based on dataset value
