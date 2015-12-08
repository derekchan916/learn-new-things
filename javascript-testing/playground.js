var x = []
for(var i = 0; i < 10; i++) {
  x[i] = function() {
    console.log("Value: " + i)
  }
}
x[ 2 ]();
// what does this produce, and how can we fix it without changing x[ 2 ]()

var x = [];
for(var i = 0; i < 10; i++) {
  var y = function(i) {
    return i
  };
  x[i] = (function(i) {
    return function() {
      console.log("Value: " + y(i))
    };
  })(i);
}

x[ 2 ]();
