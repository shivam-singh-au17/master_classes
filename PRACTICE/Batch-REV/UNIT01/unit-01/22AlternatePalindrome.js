function palimdrome(x) {
  var length = x.length;
  var middle = Math.floor(length / 2);
  var frontresult = "";
  var backresult = "";
  for (var i = middle - 1; i >= 0; i--) {
    frontresult = frontresult + x[i];
  }
  if (length % 2 == 0) {
    for (var j = middle; j < length; j++) {
      backresult = backresult + x[j];
    }
  } else {
    for (var j = middle + 1; j < length; j++) {
      backresult = backresult + x[j];
    }
  }
  if (frontresult == backresult) {
    var final = "Yes";
  } else {
    final = "No";
  }
  return final;
}

function runProgram(input) {
  var data = input.split("\n");
  var n = +data[0];
  var arr = data[1];
  var res = "";
  var middle = Math.ceil(n / 2);
  var front = "";
  var last = "";

  for (var i = 0; i < middle; i++) {
    front = front + arr[i];
  }
  for (var j = n - 1; j >= middle; j--) {
    last = last + arr[j];
  }
  for (var a = 0; a < middle; a++) {
    res = res + front[a] + last[a];
  }
  console.log(palimdrome(res));
}
runProgram(`5
abab`);

// TODO: