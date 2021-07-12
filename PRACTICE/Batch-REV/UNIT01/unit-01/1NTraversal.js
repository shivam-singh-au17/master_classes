function solution(x, n) {
  var res = "";
  for (var i = n - 1; i >= 0; i--) {
    res = res + x[i][0] + " ";
  }
  for (var j = 1; j < n - 1; j++) {
    res = res + x[j][j] + " ";
  }
  for (var k = n - 1; k >= 0; k--) {
    res = res + x[k][n - 1] + " ";
  }
  return res.trim();
}

function runProgram(input) {
  var data = input.split("\n");
  var test = +data[0];
  var n = 1;
  for (var i = 1; i <= test; i++) {
    var length = +data[n];
    var mat = data.slice(n + 1, length + n + 1).map(function (x) {
      var ans = x.trim().split(" ").map(Number);
      return ans;
    });

    n = n + length + 1;
    console.log(solution(mat, length));
  }
}
runProgram(`1
4
1 2 3 4
4 5 6 5
7 8 9 8
9 4 7 2`);
