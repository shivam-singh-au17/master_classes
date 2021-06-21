var num = 37;
var isPrime = true;
if (num === 1) {
    console.log("Number 1 not a Prime Number");

} else if (num > 1) {

    for (var i = 2; i < num; i++){
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not Prime");
    }

} else {
    console.log("Not a Prime Number");
}


