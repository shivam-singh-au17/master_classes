function isPrime(x) {
  var prime = x != 1;
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function cal(x, n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var sum = x[i] + x[j];
      if (isPrime(sum) == true) {
        count++;
      }
    }
  }
  return count;
}

function runProgram(input) {
  var data = input.split("\n");
  var test = +data[0];
  for (var i = 1; i <= test; i++) {
    var n = +data[i * 2 - 1];
    var arr = data[i * 2].split(" ").map(Number);
    console.log(cal(arr, n));
  }
}
runProgram(`2
3
1 2 3
5
2 2 2 2 1`);
