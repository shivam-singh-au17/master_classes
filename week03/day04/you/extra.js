var num = [13, 89, 81, 66, 81, 63, 71, 76, 73, 81];
var k = 15;


function bubbleSort(items, k) {
    var arr = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i] > k) {
            arr.push(items[i])
        }
    }
    return arr;
}



function firstNumber(items) {
    if (items.length >= 1) {
        var temp = items[0]
        for (var i = 1; i < items.length; i++){
            if (items[i] < temp) {
                temp = items[i]
            }
        }
        var result = temp
    } else {
        result = "-1"
    }
    return result
}


var ans = bubbleSort(num, k);
var ans2 = firstNumber(ans)
console.log(ans2);