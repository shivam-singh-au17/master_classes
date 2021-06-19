// FIND THE COUSINS OF 7
// Create a file named cousins.js.Find all the cousins of 7(numbers those are divisible by 7) between 50 and 150.


for (var i = 50; i <= 150; i++) {
    if (i % 7 == 0) {
        console.log(`cousins of 7 between 50 and 150 is ${i}`);
    }
}