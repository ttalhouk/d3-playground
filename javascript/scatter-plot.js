var dataset = _.map(_.range(25), function (i) {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: Math.random() * 30
  };
});

// Dataset is an array of objects with x,y position and radius r



var margin = {top: 0, right: 0, bottom: 0, left: 0};

var w = 400 - margin.left - margin.right,
    h = 300 - margin.top - margin.bottom;

var svg = d3.select('#chartArea2').append('svg')
  .attr('width', w + margin.left + margin.right)
  .attr('height', h + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var xScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, w]);

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset, function (d) {
  return d.y;
})])
 .range([h, 0]);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('class', 'bubble')
  .attr('cx', function (d) {
  return xScale(d.x);
})
  .attr('cy', function (d) {
  return yScale(d.y);
})
  .attr('r', function (d) {
  return d.r;
});

// cx and cy are center x and y
// values must be passed in as functions since we need to pull off the property
// from the data object for x,y,r
