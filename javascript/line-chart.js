var w = 600;
var h = 400;
var path;
var subjects;

$.getJSON('https://jsbin.com/vegaqi/1.js', function (json) {
  subjects = json;

  _.keys(subjects).forEach(function (subject) {
    subjects[subject].forEach(function (d) {
      d.date = d3.time.format("%Y%m%d").parse(d.date);
    });
  });

  path = d3
    .select('#chart')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('g')
    .append('path');

  updateChart('math');
});

function updateChart (subject) {
  var data = subjects[subject];
  var dates = _.map(data, 'date');
  var counts = _.map(data, 'count');

  var x = d3.time.scale()
    .domain(d3.extent(dates))
    .range([0, w]);
  // extent evalueates the min and max values

  var y = d3.scale.linear()
    .domain(d3.extent(counts))
    .range([h, 0]);

  var area = d3.svg.area()
    .interpolate('bundle')
    .x(function (d) {
      return x(d.date);
    })
    .y0(function (d) {
      return y(0);
    })
    .y1(function (d) {
      return y(d.count);
    });


  // area charts require 2 y values.  y0 is the start and y1 is the filled stop
  // line charts are the same except only 1 y value and use .line()

  path
    .datum(data)
    .transition()
    .duration(450)
    .attr('d', area);
  // sets the path for the line or area chart.
}
