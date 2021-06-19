// Given an array of strings print the snake case of the strings[Assume Small case strings]
// Sample Input - ["masai", "school"]
// Sample Output - masai_school
// Screenshot of the output for the array["apple", "windows", "ubuntu"]

var array = ["apple", "windows", "ubuntu"];

var snakeCase = function (items, items2) {
    return items + "_" + items2
}

var result = array.reduce(snakeCase);
console.log(result);


// Given an array of strings convert them to hypen case
// Sample Input - ["Masai", "School"]
// Sample Output - masai - school
// Screenshot of the output for the array["Apple", "Windows", "UBUNTU"]