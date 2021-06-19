function FindTriplets(arr, n, m) {
  var count = 0;
  for (var a = 0; a < n - 2; a++) {
    for (var b = a + 1; b < n - 1; b++) {
      for (var c = b + 1; c < n; c++) {
        if (a < b < c <= n - 1 && arr[a] + arr[b] - arr[c] == m) {
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
    console.log(FindTriplets(arr, n, m));
  }
}

if (process.env.USERNAME === "shiva") {
  runProgram(`2
3 0
1 2 3
5 4
3 2 3 1 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}