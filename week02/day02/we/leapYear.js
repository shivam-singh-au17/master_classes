// LEAP YEAR
// Create a file named leapYear.js.Write a code to find out whether the given year is a leap year or not.



var year = 2011;


// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }


// if (year % 100 == 0) {
//     if (year % 400 == 0) {
//         console.log("Leep Year");
//     } else {
//         console.log("Not a Leep Year");
//     }
// } else {
//     if (year % 4 == 0) {
//         console.log("Leep Year");
//     } else {
//         console.log("Not a Leep Year");
//     }
// }


if (year % 100 == 0 && year % 400 == 0) {
    console.log("Leep Year");
} else {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log("Leep Year");
    } else {
        console.log("Not a Leep Year");
    }
}