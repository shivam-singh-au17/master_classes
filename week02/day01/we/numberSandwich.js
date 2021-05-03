// Number Sandwich
// Create a file named numberSandwich.js.Take a variable named myNum and assign it any value.Output the following things on the basis of the condition satisfied.If the number satisfies more than 1 condition, display all the relevant output.

// If the number is between 6 and 10(both inclusive), then output The number is between 6 and 10
// If the number is greater than 5, then output The number is greater than 5
// If the number is less than or equal to 12, then output The number is less than or equal to 12
// If the number is divisible by 7, then output The number is divisible by 7



var myNum = 7;

if (myNum >= 6 && myNum <= 10) {
    console.log("The number is between 6 and 10");
}
if (myNum > 5) {
    console.log("The number is greater than 5");
}
if (myNum <= 12) {
    console.log("The number is less than or equal to 12");
}
if (myNum % 7 == 0) {
    console.log("The number is divisible by 7");
}