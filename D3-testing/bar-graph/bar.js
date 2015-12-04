var outerWidth = 800;
var outerHeight = 400;
var margin = { left: 50, top: 50, right: 10, bottom: 50 };
var barPadding = 0.05;

var innerWidth = outerWidth - margin.left - margin.right;
var innerHeight = outerHeight - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
  .attr("width", outerWidth)
  .attr("height", outerHeight);

var g = svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xAxisG = g.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + innerHeight + ")");
var yAxisG = g.append("g")
  .attr("class", "axis");

g.append("text")
  .attr("y", -25)
  .style("text-anchor", "end")
  .text("Count");

var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);
var yScale = d3.scale.linear().range([innerHeight, 0]);

var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(5)

function render(data){
  var letters = [];
  var maxCount = 0;
  for (var i = 0; i < data.length; i++){
    letters[i] = data[i].letter;
    if (maxCount < data[i].count) { maxCount = data[i].count }
  };

  xScale.domain(letters);
  yScale.domain([0, maxCount]);

  xAxisG.call(xAxis);
  yAxisG.call(yAxis);

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
