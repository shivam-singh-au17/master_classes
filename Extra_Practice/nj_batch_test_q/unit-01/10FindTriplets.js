function findTriplet(x, n, m) {
  var count = 0;
  for (var a = 0; a < n - 2; a++) {
    for (var b = a + 1; b < n - 1; b++) {
      for (var c = b + 1; c < n; c++) {
        if (a < b < c <= n - 1 && x[a] + x[b] - x[c] == m) {
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
    console.log(findTriplet(arr, n, m));
  }
}
runProgram(`2
3 0
1 2 3
5 4
3 2 3 1 5`);
