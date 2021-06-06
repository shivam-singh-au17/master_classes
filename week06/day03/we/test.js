

var str = "shivam";

for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
        var res = ""
        for (var k = i; k < j; k++) {
            res += str[k];
        }
        console.log(res);
    }
}