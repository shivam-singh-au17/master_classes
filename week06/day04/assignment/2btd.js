

function binaryToDecimal(b_num) {
    
    var binary_number = 0;
    var base = 1;
    var temp = b_num;
    while (temp) {
        var last_digit = temp % 10;
        temp = parseInt(temp / 10) ;

        binary_number += last_digit * base;
        base = base * 2;
    }
    return binary_number;
}

var num = 10101
var result = binaryToDecimal(num);
console.log(result);

var num = 1001001
var result = binaryToDecimal(num);
console.log(result);






















// function binaryToDecimal(string) {
//     var decimal = 0;
//     var bits = 1;
//     for (var i = 0; i < string.length; i++) {
//         var currNum = +(string[string.length - i - 1]);
//         if (currNum === 1) {
//             decimal += bits;
//         }
//         bits *= 2;
//     }
//     return decimal;
// }