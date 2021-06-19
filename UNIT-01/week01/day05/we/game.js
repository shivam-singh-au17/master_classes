
var a = true && false && !(true) || false;
console.log(a);

var b = true || !(false) && (true || false);
console.log(b);

var d = false || (true && false) || true;
console.log(d);

var e = true || (false && true || true);
console.log(e);
