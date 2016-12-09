// var dataset = _.map(_.range(25), function (i) {
//   return {
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     r: Math.random() * 30
//   };
// });
//
// // Dataset is an array of objects with x,y position and radius r
//
//
//
// var margin = {top: 0, right: 0, bottom: 0, left: 0};
//
// var w = 400 - margin.left - margin.right,
//     h = 300 - margin.top - margin.bottom;
//
// var svg = d3.select('#chartArea2').append('svg')
//   .attr('width', w + margin.left + margin.right)
//   .attr('height', h + margin.top + margin.bottom)
//   .append('g')
//   .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// var xScale = d3.scale.linear()
//   .domain([0, 100])
//   .range([0, w]);
//
// var yScale = d3.scale.linear()
//   .domain([0, d3.max(dataset, function (d) {
//   return d.y;
// })])
//  .range([h, 0]);
//
// svg.selectAll('circle')
//   .data(dataset)
//   .enter()
//   .append('circle')
//   .attr('class', 'bubble')
//   .attr('cx', function (d) {
//   return xScale(d.x);
// })
//   .attr('cy', function (d) {
//   return yScale(d.y);
// })
//   .attr('r', function (d) {
//   return d.r;
// });
//
// // cx and cy are center x and y
// // values must be passed in as functions since we need to pull off the property
// // from the data object for x,y,r


// Example 9

// var dataset = _.map(_.range(25), function (i) {
//   return {
//     x: Math.round(Math.random() * 100),
//     y: Math.round(Math.random() * 100),
//     r: Math.round(5 + Math.random() * 10)
//   };
// });
//
// var margin = {top: 20, right: 20, bottom: 60, left: 60};
//
// var w = 500 - margin.left - margin.right,
//     h = 400 - margin.top - margin.bottom;
//
// var svg = d3.select('#chartArea2').append('svg')
//   .attr('width', w + margin.left + margin.right)
//   .attr('height', h + margin.top + margin.bottom)
//   .append('g')
//   .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// var xScale = d3.scale.linear()
//   .domain([0, 100])
//   .range([0, w]);
//
// var xAxis = d3.svg.axis()
//   .scale(xScale)
//   .orient('bottom')
//   .ticks(5)
//   .innerTickSize(6)
//   .outerTickSize(12)
//   .tickPadding(12);
//
// svg.append('g')
//   .attr('class', 'x axis')
//   .attr('transform', 'translate(0, '+ (h + 0) + ')')
//   .call(xAxis);
//
// var yScale = d3.scale.linear()
//   .domain([0, 100])
//   .range([h, 0]);
//
// var yAxis = d3.svg.axis()
//   .scale(yScale)
//   .orient('left');
//
// svg.append('g')
//   .attr('class', 'y axis')
//   .attr('transform', 'translate(0, 0)')
//   .call(yAxis);
//
// svg.selectAll('circle')
//   .data(dataset)
//   .enter()
//   .append('circle')
//   .attr('class', 'dot')
//   .attr('cx', function (d) {
//     return xScale(d.x);
// })
//   .attr('cy', function (d) {
//     return yScale(d.y);
// })
//   .attr('r', function (d) {
//     return d.r;
// });

// Example 10
//
// var dataset = _.map(_.range(25), function (i) {
//     return {
//         x: Math.round(Math.random() * 100),
//         y: Math.round(Math.random() * 100),
//         r: Math.round(5 + Math.random() * 10)
//     };
// });
//
// var margin = {top: 20, right: 20, bottom: 60, left: 60};
// var w = 500 - margin.left - margin.right,
//     h = 400 - margin.top - margin.bottom;
//
// var svg = d3.select('#chartArea2').append('svg')
//     .attr('width', w + margin.left + margin.right)
//     .attr('height', h + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
//
// var xScale = d3.scale.linear()
//     .domain([0, 100])
//     .range([0, w]);
//
// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient('bottom')
//     .ticks(5)
//     .innerTickSize(6)
//     .outerTickSize(12)
//     .tickPadding(12);
//
// svg.append('g')
//     .attr('class', 'x axis')
//     .attr('transform', 'translate(0, '+ (h + 0) + ')')
//     .call(xAxis);
//
// var yScale = d3.scale.linear()
//     .domain([0, 100])
//     .range([h, 0]);
//
// var yAxis = d3.svg.axis()
//     .scale(yScale)
//     .orient('left');
//
// svg.append('g')
//     .attr('class', 'y axis')
//     .attr('transform', 'translate(0, 0)')
//     .call(yAxis);
//
// svg.selectAll('circle')
//     .data(dataset)
//     .enter()
//     .append('circle')
//     .attr('class', 'dot')
//     .attr('cx', function (d) {
//         return xScale(d.x);
//     })
//     .attr('cy', function (d) {
//         return yScale(d.y);
//     })
//     .attr('r', function (d) {
//         return d.r;
//     })
//     .on('mouseover', function (d) {
//         d3.select(this).classed('active', true);
//     })
//     .on('mouseout', function (d) {
//         d3.select(this).classed('active', false);
//     })
//     .on('mousedown', function (d) {
//         d3.select(this).attr('r', d.r * 2);
//     })
//     .on('mouseup', function (d) {
//         d3.select(this).attr('r', d.r);
//     });
//
// // using .on on the d3 object allowes for event handlers.
// // adding active class allows for changing properties when event is triggered


// Example 11

function update () {
  _.each(dataset, function (datum) {
    datum.x = Math.round(Math.random() * 100);
    datum.y = Math.round(Math.random() * 100);
    datum.r = Math.round(5 + Math.random() * 10);
  })

  svg.selectAll('circle')
    .transition()
    .duration(500)
    .attr('cx', function (d) {
       return xScale(d.x);
    })
    .style('fill', 'orange')
    .transition()
    .duration(500)
    .attr('cy', function (d) {
       return yScale(d.y);
    })
    .style('fill', 'blue')
    .transition()
    .duration(500)
    .attr('r', function (d) {
       return d.r;
    })
    .style('fill', 'purple');
    // transitions each in the x directon then y direction since duration
    // is set on each property
 }

 // alternate transitions
 // .delay(function(d,i){return i * 25})
 // delays the update to allow each element to move one after the other with 25
 // ms delay

var dataset = _.map(_.range(25), function (i) {
  return {
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100),
    r: Math.round(5 + Math.random() * 10)
  };
});

var margin = {top: 20, right: 20, bottom: 60, left: 60};
var w = 500 - margin.left - margin.right,
h = 400 - margin.top - margin.bottom;

var svg = d3.select('#chartArea2').append('svg')
  .attr('width', w + margin.left + margin.right)
  .attr('height', h + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var xScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, w]);

var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient('bottom')
  .ticks(5)
  .innerTickSize(6)
  .outerTickSize(12)
  .tickPadding(12);
// properties of the xAxis using the .axis property on the d3 object
// numbers placed on bottom
// ticks is number of ticks
// tick size is size of ticks (inner and outer)
// tick padding is the space betweent the tick and number

svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0, '+ (h + 0) + ')')
  .call(xAxis);
// appends a grapic element which we call xAxis from above
// transform moves it to the bottom of the chart

var yScale = d3.scale.linear()
  .domain([0, 100])
  .range([h, 0]);

var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient('left');

// orient adds numbers to the left of the axis

svg.append('g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(0, 0)')
  .call(yAxis);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('class', 'dot')
  .attr('cx', function (d) {
    return xScale(d.x);
  })
  .attr('cy', function (d) {
    return yScale(d.y);
  })
  .attr('r', function (d) {
    return d.r;
  })
  .on('mouseover', function (d) {
    d3.select(this).classed('active', true);
  })
  .on('mouseout', function (d) {
    d3.select(this).classed('active', false);
  })
  .on('mousedown', function (d) {
    d3.select(this).attr('r', d.r * 2);
  })
  .on('mouseup', function (d) {
    d3.select(this).attr('r', d.r);
  });
