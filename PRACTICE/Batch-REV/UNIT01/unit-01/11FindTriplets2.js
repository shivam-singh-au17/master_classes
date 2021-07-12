function find2Triplet(x, n, m) {
  var count = 0;
  for (var i = 0; i < n - 2; i++) {
    for (var j = i + 1; j < n - 1; j++) {
      for (var k = j + 1; k < n; k++) {
        if (i < j < k <= n - 1 && x[i] - x[j] + x[k] == m) {
          count++;
        }
      }
    }
  }
  return count;
}

function runProgram(input) {
  var data = input.split("\n");
  var test = +data[0];
  for (var i = 1; i <= test; i++) {
    var nm = data[i * 2 - 1].split(" ").map(Number);
    var n = nm[0];
    var m = nm[1];
    var arr = data[i * 2].split(" ").map(Number);
    console.log(find2Triplet(arr, n, m));
  }
}
runProgram(`2
3 0
1 3 2
5 4
3 2 3 1 5`);
