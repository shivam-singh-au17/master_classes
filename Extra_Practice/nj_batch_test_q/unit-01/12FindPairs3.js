function find3Pairs(x, n, m) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((x[i] + x[j]) % m != 0) {
        count++;
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
    var ans = find3Pairs(arr, n, m);
    console.log(ans);
  }
}
runProgram(`2
3 2
1 3 2
5 4
3 2 2 1 5`);

// var x = [1, 2, 3];

// var n = x.length;
// var sum = 0;
// for (var i = 0; i < n; i++) {
//   var res = "";
//   for (var j = i + 1; j < n; j++) {
//     res = res + x[i] + " " + x[j];
//   }
//   console.log(res);
// }
