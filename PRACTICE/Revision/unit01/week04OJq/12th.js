// Given an array of strings print the length of each string
// Screenshot of the output for the array["apple", "windows", "ubuntu"]

var str = ["apple", "windows", "ubuntu"];

var length = function (str) {
    return str.length;
}

var result = str.map(length);
console.log(result);

// Given an array of string generate an array with their first characters
// Sample Input - ["Masai", "School"]
// Sample Output - ["M", "S"]
// Screenshot of the output for the array["apple", "windows", "ubuntu"]

var str = ["apple", "windows", "ubuntu"];

var firstCharacters = function (str) {
    return str[0];
}

var result = str.map(firstCharacters);
console.log(result);


// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
// Screenshot of the output for the array["apple", "windows", "ubuntu", "cola", "system"]

var str = ["apple", "windows", "ubuntu", "cola", "system"];

var firstOrLast = function (str) {
    if (str[0] == 'a' || str[str.length - 1] == 'a') {
        return str;
    }
}

var result = str.filter(firstOrLast);
console.log(result);



// Given an array of strings print the snake case of the strings[Assume Small case strings]
// Sample Input - ["masai", "school"]
// Sample Output - masai_school
// Screenshot of the output for the array["apple", "windows", "ubuntu"]


var str = ["apple", "windows", "ubuntu", "cola", "system"];

var snakeCase = function (str1, str2) {

    return str1 + "_" + str2;

}

var result = str.reduce(snakeCase);
console.log(result);



// Given an array of strings convert them to hypen case
// Sample Input - ["Masai", "School"]
// Sample Output - masai - school
// Screenshot of the output for the array["Apple", "Windows", "UBUNTU"]



var str = ["apple", "windows", "ubuntu", "cola", "system"];

var hypenCase = function (str1, str2) {

    return str1 + "-" + str2;

}

var result = str.reduce(hypenCase);
console.log(result);




// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8
// Screenshot of the output for the array["Apple", "Windows", "Linux", "Kindle", "Quiz"]



var str = ["A", "Good", "Problem"];

var lengthOdd = function (str) {
    if (str.length % 2 == 1) {
        return str;
    }
}

var lengthOddSum = function (str1, str2) {

    return str1.length + str2.length;

}

var result = str.filter(lengthOdd).reduce(lengthOddSum);
console.log(result);


// Given an array of numbers, return the elements that have even index(starting the count at 0) and are even
// Use Higher - order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]


var arr = [2, 4, 5, 3, 6, 8];

var evenIndex = function (arr, index) {
    if (arr % 2 == 0 && index % 2 == 0) {
        return arr;
    }
}

var result = arr.filter(evenIndex);
console.log(result);

