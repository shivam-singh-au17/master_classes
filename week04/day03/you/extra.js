
var A = "12215";

function palindrome(items) {
    result = "";
    for (var i = items.length - 1; i >= 0; i--) {
        result += items[i]
    }
    return result
}

function printResult(result, int) {
    if (result == int) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}





var ans = palindrome(A);
// console.log(ans);
printResult(ans, A)

// var ans = minNum(A);
// console.log(ans);