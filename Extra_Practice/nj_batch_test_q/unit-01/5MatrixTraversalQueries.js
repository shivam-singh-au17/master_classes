function rev(x) {
  var res = "";
  var n = x.length;
  for (var i = n - 1; i >= 0; i--) {
    res = res + x[i] + " ";
  }
  return res;
}

function normal(x) {
  var res = "";
  var n = x.length;
  for (var i = 0; i < n; i++) {
    res = res + x[i] + " ";
  }
  return res;
}

function q1(mat, r, c, q) {
  var res = "";
  for (var i = 0; i < r; i++) {
    if (i % 2 == 0) {
      res = res + normal(mat[i]);
    } else {
      res = res + rev(mat[i]);
    }
  }
  return res.trim();
}

function q2(mat, r, c, q) {
  var res = "";
  for (var i = 0; i < r; i++) {
    if (i % 2 == 0) {
      res = res + rev(mat[i]);
    } else {
      res = res + normal(mat[i]);
    }
  }
  return res.trim();
}

function runProgram(input) {
  var data = input.split("\n");
  var test = +data[0];
  var n = 1;
  for (var i = 1; i <= test; i++) {
    var lenarr = data[n].split(" ").map(Number);
    var row = lenarr[0];
    var col = lenarr[1];
    var q = lenarr[2];

    var mat = data.slice(n + 1, row + n + 1).map(function (x) {
      return x.trim().split(" ").map(Number);
    });
    n = n + row + 1;
    if (q == 1) {
      console.log(q1(mat, row, col, q));
    } else if (q == 2) {
      console.log(q2(mat, row, col, q));
    }
  }
}
runProgram(`2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9`);
