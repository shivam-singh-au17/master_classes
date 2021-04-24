
var a = "Masai";
var b = 21331;
var c = true;

console.log(typeof a == typeof Number(b)); // false
console.log(typeof Number(a) == typeof Number(b)); //true
console.log(typeof String(c) == String("")); // false