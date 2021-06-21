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
  for (var i = 0; i < n; i++) {
    if (x[i] == 10) {
      var ans = true;
      break;
    }
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
10 10 10`);
