
var num = 6;

for (var i = 1; i <= num; i++) {
    var result = "";
    for (var j = 1; j <= num - i; j++) {
        result += " "
    }
    for (var k = 1; k <= i; k++) {
        result += "* "
    }
    console.log(result);
}