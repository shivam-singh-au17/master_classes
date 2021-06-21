function cal(x, n) {
  var res = "";
  for (var a = 0; a < n; a++) {
    res = res + x[a][0] + " ";
  }
  for (var i = n - 2; i >= 1; i--) {
    for (var j = 1; j < n - 1; j++) {
      if (i + j == n - 1) {
        res = res + x[i][j] + " ";
      }
    }
  }
  for (var i = 0; i < n; i++) {
    res = res + x[i][n - 1] + " ";
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
      var ans = x.trim().split(" ").map(Number);
      return ans;
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
