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


g.append("text")
  .attr("y", -25)
  .style("text-anchor", "end")
  .text("Count");

function render(data){

  xScale.domain(letters);
  yScale.domain([0, maxCount]);

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
