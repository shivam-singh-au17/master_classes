// IS PRIME
// create a file named isPrime.js.Write the code to find out whether a given number is prime or not.
// Note - Do the faster version of it if possible


var number = 15;
var isPrime = true;

// check if number is equal to 1
if (number === 1) {

    console.log("1 is neither prime nor composite number.");

} else if (number > 1) {                             // check if number is greater than 1

    for (var i = 2; i < number; i++) {               // looping through 2 to number-1
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }

} else {                                              // check if number is less than 1

    console.log("The number is not a prime number.");

}




// var n1 = 2;
// var n2 = 18;
// var Prime_num = "";
// // looping from lowerNumber to higherNumber
// for (var i = n1; i <= n2; i++) {
//     var result = 0;

//     // looping through 2 to user input number
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             result = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers

//     if (i > 1 && result == 0) {
//         Prime_num = Prime_num + i + " "
//     }
// }
// console.log(Prime_num);