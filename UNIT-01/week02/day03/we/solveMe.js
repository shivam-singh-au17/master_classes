// SOLVE ME
// Create a file named solveMe.js.Find the first and third multiple of 13, between 50 and 150 using the while loop.

var i = 50;
var count = 0;

while (i <= 150) {
    if (i % 13 == 0) {
        count++;
        if (count == 1) {
            console.log(i);
        } else if (count == 3) {
            console.log(i);
            break;
        }
    }
    i++;
}