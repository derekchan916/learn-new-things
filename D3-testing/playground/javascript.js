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
//
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

var svg = d3.select("body").append("svg");
svg.attr("width", 250);
svg.attr("height", 250);

var rect = svg.append("rect")
rect.attr("x", 50);
rect.attr("y", 50);
rect.attr("width", 100);
rect.attr("height", 100);
