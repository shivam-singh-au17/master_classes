
var a =   true && false && !(true) || false;
console.log(a) // result = false

var b = true || !(false) && (true || false);
console.log(b)  // result = true

var c = false || (true && false) || true;
console.log(c)  // result = true

var d = true || (false && true || true);
console.log(d)  // result = true