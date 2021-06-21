function leftswastik(x, r, c, mr, mc) {
  var sum = 0;
  for (var i = 0; i <= mr; i++) {
    sum = sum + x[i][0];
  }
  for (var i = 1; i < c - 1; i++) {
    sum = sum + x[mr][i];
  }
  for (var i = mr; i < r; i++) {
    sum = sum + x[i][c - 1];
  }
  return sum;
}

function rightSwastik(x, r, c, mr, mc) {
  var sum = 0;
  for (var i = mc; i < c; i++) {
    sum = sum + x[0][i];
  }
  for (var i = 1; i < r - 1; i++) {
    sum = sum + x[i][mc];
  }
  for (var i = 0; i <= mc; i++) {
    sum = sum + x[r - 1][i];
  }
  return sum;
}

function runProgram(input) {
  var data = input.split("\n");
  var rc = data[0].split(" ").map(Number);
  var row = rc[0];
  var col = rc[1];
  var mat = data.slice(1).map(function (x) {
    return x.trim().split(" ").map(Number);
  });
  var middleRow = Math.floor(row / 2);
  var middleCol = Math.floor(col / 2);
  var left = leftswastik(mat, row, col, middleRow, middleCol);
  var right = rightSwastik(mat, row, col, middleRow, middleCol);
  var diff = Math.abs(left - right);
  console.log(diff);
}
runProgram(`3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15`);
