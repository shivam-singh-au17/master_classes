function cal(x, n) {
  var res = "";
  for (var i = n - 1; i >= 1; i--) {
    res = res + x[i][0] + " ";
  }
  for (var i = 0; i < n; i++) {
    res = res + x[0][i] + " ";
  }
  for (var i = 1; i < n; i++) {
    res = res + x[i][n - 1] + " ";
  }
  for (var i = n - 2; i >= 1; i--) {
    res = res + x[n - 1][i] + " ";
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
runProgram(`2
3
1 2 3
4 5 6
7 8 9
4
1 5 7 8
9 7 5 2
7 5 8 2
3 5 1 8`);
