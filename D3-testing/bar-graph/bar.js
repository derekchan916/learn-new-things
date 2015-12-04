var outerWidth = 800;
var outerHeight = 500;
var margin = { left: 50, top: 50, right: 10, bottom: 50 };
var barPadding = 0.1;

var innerWidth = outerWidth - margin.left - margin.right;
var innerHeight = outerHeight - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
  .attr("width", outerWidth)
  .attr("height", outerHeight);

var g = svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xAxisG = g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + innerHeight + ")");
var yAxisG = g.append("g")
  .attr("class", "y axis");

var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);
var yScale = d3.scale.linear().range([innerHeight, 0]);

var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
var yAxis = d3.svg.axis().scale(yScale).orient("left");

function render(data){
  xScale.domain(data.map(function(d){ return d.letter; }));
  yScale.domain([0, d3.max(data, function(d){ return d.count; })]);

  xAxisG.call(xAxis);
  yAxisG.call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Count");

  var bars = g.selectAll("rect").data(data);
  bars.enter().append("rect")
    .attr("class", "bar")
    .attr("width", xScale.rangeBand());

  bars
    .attr("x", function(d){ return xScale(d.letter); })
    .attr("y", function(d){ return yScale(d.count); })
    .attr("height", function(d){ return innerHeight - yScale(d.count); });

  bars.exit().remove();
}

function type(d) {
  d.count = +d.count;
  return d;
}

d3.csv("letter-count.csv", type, render);
