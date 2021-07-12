

// CHECK KTH BIT Set(1) OR NOT 

var num = 27;
var k = 4;

var i = 1;
var store = i << k

var res = num & store;

if (res == 0) {
    console.log("NOT SET");
} else {
    console.log("SET");
}





// SET KTH BIT TO 1 


var num = 27;
var k = 2;

var i = 1;
var store = i << k

var res = num | store;

console.log('res:', res)



// CLEAR KTH BIT (KTH BIT == 0)




var num = 27;
var k = 3;

var i = 1;
var i = i << k
var j = ~i;
var res = num & j;

console.log('res clear:', res)



// TOGGEL THE KTH BIT (IF KTH BIT 0 BICOME 1 ELSE KTH BIT 1 BICOME 0)




var num = 27;
var k = 4;

var i = 1;
var i = i << k
var res = num ^ i;

console.log('res TOGGEL:', res)



// COUNT NO OF SET BITS IN A GIVEN NUMBER 



var num = 27;
var count = 0;

while (num > 0) {
    if (num & 1 != 0) {
        count++;
    }
    num = num / 2;   // or   num = num >> 1;

}
console.log("count:", count);





// FIND THE NEXT HIGHEST POWER OF 2 GIVEN NUMBER 


// FIXME:

var num = 9;

if (num && (num & (num - 1)) == 0) {
    console.log(num * 2);
}
else {

    var count = 0;
    while (num > 0) {
        count++;
        num = num / 2;
    }

}
// console.log("HIGHEST:", Math.pow(2, count));
console.log("HIGHEST:", 1 << count);
console.log(count);





var num = 13;
var res = num >> 1;
console.log('res:', res)



