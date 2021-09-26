
function numAdd(num) {
    let sum = num.split(":")
    return Number(sum.join(""));
}

var num = "9:40";
console.log(numAdd(num));