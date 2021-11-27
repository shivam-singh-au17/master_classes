
console.log(1);
console.log(2);
setTimeout(function cb() {
    console.log("callback1");
}, 5000);

setTimeout(function cb() {
    console.log("callback2");
}, 4000);
console.log(3);
console.log(4);