// FACTORIAL
// Create a file named factorial.js.Write the code for finding the factorial of a number.
// For eg - for n = 4, the output should be 24
// For eg - for n = 6, the output should be 720

var num = 4;

var fact = 1;
for (var i = 2; i <= num; i++) {
    fact = fact * i;
    console.log(fact);
}
console.log(fact);

