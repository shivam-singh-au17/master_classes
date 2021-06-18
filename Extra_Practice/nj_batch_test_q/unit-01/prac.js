var newInput = "A quick BROWN fox Jumps oveR a LazY DOg";
var str = [];
var data = newInput.trim().split(" ");
var n = data.length;
for (var i = 0; i < n; i++) {
  if (data[i] !== "") {
    str.push(data[i].toLowerCase());
  }
}

function camelCase(a) {
  var x = "";
  x += a[0];
  for (var i = 1; i < a.length; i++) {
    x += a[i][0].toUpperCase();

    for (var j = 1; j < a[i].length; j++) {
      x += a[i][j];
    }
  }

  console.log(x);
}

function hypenCase(a) {
  var y = "";
  for (var i = 0; i < a.length; i++) {
    y += a[i].toLowerCase();
    if (i < a.length - 1) {
      y += "-";
    }
  }
  console.log(y);
}

function snakeCase(a) {
  var z = "";
  for (var i = 0; i < a.length; i++) {
    z += a[i].toLowerCase();
    if (i < a.length - 1) {
      z += "_";
    }
  }
  console.log(z);
}

camelCase(str);
snakeCase(str);
hypenCase(str);
