var myArrayOfObjects = [
  { x: 100, y: 100 },
  { x: 130, y: 120 },
  { x: 80, y: 180 },
  { x: 180, y: 80 },
  { x: 180, y: 40 }
]

myArrayOfObjects.forEach(function (d) {
  console.log(d.x + ", " + d.y);
});
