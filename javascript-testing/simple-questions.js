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

function nthfib(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);
}

//greatest common divisor
function greatestCommonDivisor(a, b){
   if(b === 0)
     return a;
   else
     return greatestCommonDivisor(b, a%b);
};

//uniq
function uniq(arr) {
  var seen = {}
  for (var i=0; i < arr.length; i++){
    seen[i] = true;
  }

  var arr = [];
  for (var key in seen) {
    arr.push(key);
  }

  return arr;
}

//could also use set
function uniq(a) {
  var seen = new Set();
  return a.filter(function(x) {
    return !seen.has(x) && seen.add(x);
  })
}

//bsearch
function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1;
  }

  var probeIdx = Math.floor(numbers.length / 2);
  var probe = numbers[probeIdx];

  if (target === probe) {
    return probeIdx;
  } else if (target < probe) {
    return bsearch(numbers.slice(0, probeIdx), target);
  } else {
    var right = bsearch(numbers.slice(probeIdx + 1), target);
    return right === -1 ? -1 : right + 1 + probeIdx;
  }
}

//merge sort
function merge(left, right) {
  var merged = [];

  while (left.length > 0 && right.length > 0) {
    var item = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(item);
  };

  return merged.concat(left, right);
};

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    var middle = Math.floor(array.length / 2);
    var left = mergeSort(array.slice(0, middle));
    var right = mergeSort(array.slice(middle));
    return merge(left, right);
  }
};
