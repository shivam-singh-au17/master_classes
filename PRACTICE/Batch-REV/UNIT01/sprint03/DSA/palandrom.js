// var str = 'naman'
var str = [1, 2, 1, 8];

var first = 0;
var n = str.length
var last = n - 1;
var result = true;
while (first <= last) {
    if (str[0] != str[str.length - 1]) {
        result = false;
        break;
    }
    first++
    last--
}
if (result == true) {
    console.log("palandrom");
} else {
    console.log("Not a Palandrom");
}