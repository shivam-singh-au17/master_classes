// Problem - 1
// Given an array of numbers print the square of those numbers



var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

var square = function (num) {
    console.log(num ** 2);
}

arr1.forEach(square);



// Problem - 2
// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input[1, 2]
// Sample Output[2, 4]



var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

var double = function (arr) {
    return arr + arr;
}

var result = arr2.map(double);
console.log(result);



// Problem - 3
// Given an array of numbers extract the numbers which are odd
// Sample Input - [1, 2, 3]
// Sample Output - [1, 3]



var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

var isOdd = function (items) {
    return items % 2 == 1
}

var result = arr3.filter(isOdd);
console.log(result);



// Problem - 4
// Given an array of numbers print the product of all numbers
// Sample Input - [2, 3, 4]
// Sample Output - 24



var arr4 = [2, 3, 4];

var product = function (num1, num2) {
    return num1 * num2
}

var result = arr4.reduce(product);
console.log(result);



// Problem - 5
// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4



var arr5 = [1, 2, 3, 4];

var sum = function (num1, num2) {
    return num1 + num2
}

var result = arr5.filter(isOdd).reduce(sum);
console.log(result);



// Problem - 6
// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243(27 + 216)



var arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var divisibleBy3 = function (num) {
    return num % 3 == 0
}

var cube = function (items) {
    return (items ** 3)
}

var result = arr6.filter(divisibleBy3).map(cube).reduce(sum);
console.log(result);


