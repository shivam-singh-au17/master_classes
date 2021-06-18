function cal(x, n) {
  var res = "";
  for (var a = 0; a < n; a++) {
    res = res + x[0][a] + " ";
  }
  for (var i = 1; i < n - 1; i++) {
    for (var j = n - 2; j >= 1; j--) {
      if (i + j == n - 1) {
        res = res + x[i][j] + " ";
      }
    }
  }
  for (var b = 0; b < n; b++) {
    res = res + x[n - 1][b] + " ";
  }
  return res;
}

function runProgram(input) {
  var data = input.split("\n");
  var test = +data[0];
  var n = 1;
  for (var i = 1; i <= test; i++) {
    var len = +data[n];
    var mat = data.slice(n + 1, len + n + 1).map(function (x) {
      return x.trim().split(" ").map(Number);
    });
    n = n + len + 1;
    console.log(cal(mat, len));
  }
}
runProgram(`1
4
1 2 3 4
4 5 6 5
7 8 9 8
9 4 7 2`);
