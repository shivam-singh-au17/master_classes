function subArray(x, n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    var res = [];
    for (var j = i; j < n; j++) {
      res.push(x[j]);
      if (cheak(res) == true) {
        count++;
      }
    }
  }
  return count;
}

function cheak(x) {
  var n = x.length;
  var diff = Math.abs(x[0] - x[n - 1]);
  if (diff % 2 == 1) {
    var ans = true;
  }
  return ans;
}

function runProgram(input) {
  var data = input.split("\n");
  var n = +data[0];
  var arr = data[1].split(" ").map(Number);
  console.log(subArray(arr, n));
}
runProgram(`3
1 2 3`);
