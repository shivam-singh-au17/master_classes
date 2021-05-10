
var year = 2007;
if (year % 400 == 0 && year % 100 == 0) {
    console.log("Leep Year");
} else {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log("Leep Year");
    } else {
        console.log("Not A Leep Year");
    }
}