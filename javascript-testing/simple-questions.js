//isPrime

function isPrime(num) {
  if (num < 2) { return false }
  for (var i=2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

for (var i=0; i < 100; i++){
  if (isPrime(i)){
    console.log(i)
  }
}

//prime factors

function factors(num) {
  var array = [];
  for (var i=0; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
      array.push(i);

      if (num / i != i) {
        array.push(num / i);
      }
    }
  };
  return array;
};

//fibonacci
function fibonacci(n){
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var last = fibonacci(n - 1);
    last.push(last[last.length - 1] + last[last.length - 2]);

    return last;
  }
}
