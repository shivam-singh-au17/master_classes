
var str = "abcdcfa";

var newStr = "";

for (var i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
        newStr += str[i];
    }
}


var revStr = ""
for (var j = newStr.length - 1; j >= 0; j--) {
    revStr += newStr[j];
}


if (newStr == revStr) {
    console.log("Yes");
} else {
    console.log("No");
}