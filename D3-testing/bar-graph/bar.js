var outerWidth = 800;
var outerHeight = 400;
var margin = { left: 50, top: 50, right: 10, bottom: 50 };
var barPadding = 0.05;

var innerWidth = outerWidth - margin.left - margin.right;
var innerHeight = outerHeight - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
  .attr("width", outerWidth)
  .attr("height", outerHeight);
