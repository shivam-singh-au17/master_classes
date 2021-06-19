// BERMUDA TRIANGLE
// Create a file named bermudaTriangle.js.The code will input a number which will print the triangle pattern given below.For eg - when input is 4

var n = 7;
for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n - i; j++) {
        result = result + " ";
    }
    for (k = 1; k <= i; k++) {
        result += "* "
    }
    console.log(result);
}



