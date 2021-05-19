
// Array
// sub array




var a = [1, 2, 3, 4];

for (var i = 0; i < a.length; i++) {
    var result = [];
        for (var k = i; k < a.length; k++) {
            result.push(a[k]);
            console.log(result);
    }
    }


// let arry = [1, 2, 3, 4]
// for (let i = 0; i < arry.length; i++) {
//     for (let j = i; j < arry.length; j++) {
//         var result = [];
//         for (let k = i; k <= j; k++) {
//             result.push(arry[k]);
//         }
//         console.log(result)
//     }
// }


// string
// sub string


var str = "Shivam";
var res = [];
for (var i = 0; i < str.length; i++) {
    res.push(str[i]);
}
console.log(res);


var string = 'anagram';

for (var i = 0; i < string.length; i++) {
    var result = "";
    for (var k = i; k < string.length; k++) {
        result += string[k];
        console.log(result);
    }
}