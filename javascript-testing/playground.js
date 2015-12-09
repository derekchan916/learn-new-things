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
//bam, you need to close the variable and make it private

var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'TRICKED YOUUU'
}

foo.hasOwnProperty('bar') //we are expecting true but we tricked it
({}).hasOwnProperty(foo, 'bar') //this would be true
Object.prototype.hasOwnProperty(foo, 'bar')//same thing
