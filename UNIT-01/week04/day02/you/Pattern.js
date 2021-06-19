// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
// Screenshot of the output for the array["apple", "windows", "ubuntu", "cola", "system"]

var array = ["apple", "windows", "ubuntu", "cola", "system"];

var characterIsA = function (items) {
    return items[items.length - 1] == "a" || items[0] == "a";
}

var result = array.filter(characterIsA);
console.log(result);