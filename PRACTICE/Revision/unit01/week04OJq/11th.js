
// Problem - 1
// Given an array of numbers print the square of those numbers

var arr = [1, 2, 3, 4, 5, 6];

var square = function (item) {
    console.log(item * 2);
}

arr.forEach(square)


// Problem - 2
// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input[1, 2]
// Sample Output[2, 4]


var arr = [1, 2, 3, 4, 5, 6];

var double = function (item) {
    return item + item;
}

var result = arr.map(double);
console.log(result);

// Problem - 3
// Given an array of numbers extract the numbers which are odd
// Sample Input - [1, 2, 3]
// Sample Output - [1, 3]

var arr = [1, 2, 3, 4, 5, 6];

var oddNum = function (item) {
    if (item % 2== 1) {
        return item ;
    }
}

var result = arr.filter(oddNum);
console.log(result);

// Problem - 4
// Given an array of numbers print the product of all numbers
// Sample Input - [2, 3, 4]
// Sample Output - 24

var arr = [1, 2, 3, 4, 5, 6];

var product = function (item1, item2) {
   
        return item1 * item2;
    
}

var result = arr.reduce(product);
console.log(result);


// Problem - 5
// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4

var arr = [1, 2, 3, 4, 5, 6];

var sumOfOdd = function (item1, item2) {

    return item1 + item2;

}

var result = arr.filter(oddNum).reduce(sumOfOdd);
console.log(result);



// Problem - 6
// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243(27 + 216)

var arr = [1, 2, 3, 4, 5, 6];

var divBy3 = function (item1) {
    if (item1 % 3 == 0) {
        return item1;
    }
}

var cubes = function (item) {
    return item ** 3
}

var result = arr.filter(divBy3).map(cubes).reduce(sumOfOdd);
console.log(result);