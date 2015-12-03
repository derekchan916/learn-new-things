// // will have to get a real csv file
// d3.csv("data.csv", type, function(myArrayOfObjects) {
//   myArrayOfObjects.forEach(function (d) {
//     console.log(d.x + ", " + d.y);
//   });
//
//   function type (d) {
//     // parsing it into a number
//     d.x = +d.x;
//     d.y = +d.y;
//     return d;
//   }
// });
//---------------------------
// var scale = d3.scale.linear()
//   .domain([0, 1]) //data space, like input, setter
//   .range([0, 100]); //pixel space, like output
// //also uses method chaining
//
// console.log(scale.domain()); //getter function
// console.log(scale(0));
// console.log(scale(0.5));
//
// var celsiusToFahrenheit = d3.scale.linear()
//   .domain([-273, 1000])
//   .range([-459, 1832])
//
// console.log(celsiusToFahrenheit(20)) //prints 68.3079
//
// var fruitScale = d3.scale.ordinal()
//   .domain(["A", "B", "C"])
//   .range(["Apple", "Banana", "Coconut"]);
//
// console.log(fruitScale("A")); //prints Apple
//
// fruitScale.rangeRoundPoints([0, 100]);
//
// console.log(fruitScale("B")); //prints 50
//--------------------
// var svg = d3.select("body").append("svg");
// svg.attr("width", 250);
// svg.attr("height", 250);
//
// var rect = svg.append("rect")
// .attr("x", 50)
// .attr("y", 50)
// .attr("width", 100)
// .attr("height", 100);
// ------------------
// var data = [1, 2, 3, 4, 5];
//
// var scale = d3.scale.linear().domain([1, 5]).range([0, 200]);
//
// var svg = d3.select("body").append("svg").attr("width", 250).attr("height", 250);
//
// svg.selectAll("rect")//databinding, gives you all the rect elements
//   .data(data) //pass in the array data
//   .enter().append("rect") //there are no rects so enter will append the rect
//   // .attr("x", function (d){ return scale(d); }) //d will iterate through array data
//   .attr("x", scale) //can also do this because scale is basically a function
//   .attr("y", 50)
//   .attr("width", 20)
//   .attr("height", 50);
//-----------------------
//
// var scale = d3.scale.linear().domain([1, 5]).range([0, 200]);
// var svg = d3.select("body").append("svg").attr("width", 250).attr("height", 250);
//
// function render (data, color) {
//   //bind data
//   var rects = svg.selectAll("rect").data(data)
//
//   //enter
//   rects.enter().append("rect");
//   //update
//   rects
//     .attr("x", scale)
//     .attr("y", 50)
//     .attr("width", 20)
//     .attr("height", 20)
//     .attr("fill", color);
// }
//
// render([1, 2, 3], "red");
// render([1, 2, 3, 4, 5], "blue"); //try chaining the enter and update together.
// //it doesn't care about the values, just the number of elements in the array
// console.log(scale(6))
// ------------------------------------
//
// var scale = d3.scale.linear().domain([1, 5]).range([0, 200]);
// var svg = d3.select("body").append("svg").attr("width", 250).attr("height", 250);
//
// function render (data, color) {
//   //bind data
//   var rects = svg.selectAll("rect").data(data)
//
//   //enter
//   rects.enter().append("rect")
//     .attr("y", 50)
//     .attr("width", 20)
//     .attr("height", 20);
//
//   //update
//   rects
//     .attr("x", scale)
//     .attr("fill", color);
//
//   //exit
//   rects.exit().remove();
// }
//
// setTimeout( function() { render([1, 2, 3], "red"); }, 1000);
// setTimeout( function() { render([1, 2, 3, 4, 5], "blue"); }, 2000);
// setTimeout( function() { render([1, 2], "green"); }, 3000);//try removing the exit
// ----------------------------------
//
// d3.csv("iris.csv", type, function(data){
//   var min = d3.min(data, function(d){ return d.sepal_length; });
//   var max = d3.max(data, function(d){ return d.sepal_length; });
//   console.log([min, max])
// });
// // --------------------------------
//extent computes min and max and returns the array right away
//data taken from machine learning
var svg = d3.select("body").append("svg").attr("width", 250).attr("height", 250);
var xScale = d3.scale.linear().range([0, 250]);
var yScale = d3.scale.linear().range([250, 0]);
//what this inversion of range does is invert it so min value is on bottom left

function render(data){
  xScale.domain(d3.extent(data, function(d){ return d.sepal_length; })); //getting min and max of sepal_length
  yScale.domain(d3.extent(data, function(d){ return d.sepal_length; }));

  var circles = svg.selectAll("circle").data(data);
  circles.enter().append("circle").attr("r", 10);
  circles
    .attr("cx", function (d){ return xScale(d.sepal_length); })
    .attr("cy", function (d){ return yScale(d.sepal_length); });

  circles.exit().remove();
}

function type(d){
  d.sepal_length = +d.sepal_length;
  d.sepal_width = +d.sepal_width;
  d.petal_length = +d.petal_length;
  d.petal_width = +d.petal_width;
  return d;
}

d3.csv("iris.csv", type, render);
