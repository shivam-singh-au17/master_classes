
var num = 7;

for (var i = 1; i <= num; i++) {
    var result = "";
    for (var j = 1; j <= num; j++) {
        if (j == num || i == num) {
            result += "* ";
        } else {
            result += "  ";
        }
    }

    console.log(result);
}