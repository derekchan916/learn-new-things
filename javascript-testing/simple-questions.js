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
