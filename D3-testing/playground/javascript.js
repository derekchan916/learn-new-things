// will have to get a real csv file
d3.csv("data.csv", type, function(myArrayOfObjects) {
  myArrayOfObjects.forEach(function (d) {
    console.log(d.x + ", " + d.y);
  });

  function type (d) {
    // parsing it into a number
    d.x = +d.x;
    d.y = +d.y;
    return d;
  }
});
