var linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 1])
  .clamp(true);

// clamp fixes maximum/minimum values
