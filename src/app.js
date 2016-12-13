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

// CSV parsing
d3.csv('data/data.csv', function(data){
  console.log(data);
})

d3.tsv('data/data.tsv', function(data){
  console.log(data);
})


d3.json('data/data.json', function (data) {
  var extent = d3.extent(data, function (d) {
    return d.age;
  });
  console.log(extent);

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600]);
  console.log(scale(37));

  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages.values());
})
