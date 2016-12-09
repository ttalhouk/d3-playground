var dataset = [ 5, 10, 15, 20, 25, 40 ];

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

 var svg = d3.select('#chartArea').append('svg')
   .attr('width', 400)
   .attr('height', 300);

// Sets the height and width of the chart SVG element

 var multiplier = 8;

 // Sets a scale multiplier for the data

 svg.selectAll('rect')
   .data(dataset)
   .enter()
   .append('rect')
   .attr('class', 'bar')
   .attr('x', function (d, i) {
     return i * 22;
   })
   .attr('y', function (d) {
     return 300 - d * multiplier;
   })
   .attr('width', 20)
   .attr('height', function (d) {
     return d * multiplier;
   });

// now that it is an SVG element we no longer change the chart with styles.
// chart is set to "rect"
// attr 'x' is the chart's x direction each item is spaced 22px appart
// from the previous one
// attr 'y' sets the starting height this is currently set to start the bars
// from the bottom (defaults from the top)
// attr 'width/height' are the height and widths of the bars.
