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
  var arr1 = data[1];
  var arr2 = data[2];
  var total = arr1 + arr2;
  console.log(palimdrome(total));
}
runProgram(`3
abc
def`);
