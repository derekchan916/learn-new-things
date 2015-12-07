var x = []
for(var i = 0; i < 10; i++) {
  x[i] = function() {
    console.log("Value: " + i)
  }
}
x[ 2 ]();

s
