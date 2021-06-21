
var num1 = 50;
var num2 = 150;
var count = 0;
for (var i = num1; i <= num2; i++) {
    if (i % 13 == 0) {
        count++;
        if (count == 1) {
            console.log(i);
        } else if (count == 3) {
            console.log(i);
            break;
        }
    }
}