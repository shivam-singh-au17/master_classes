
var items = ['a', 'b', 'c', 'd', 'a', 'c'];

var obj = {};

for (var i = 0; i < items.length; i++) {
    var key = items[i];
    if (obj[key] == undefined) {
        obj[key] = 1;
    } else {
        var prev = obj[key];
        obj[key] = prev + 1;
    }
}

// console.log(obj);

var double = []
for (key_j in obj) {
    if (obj[key_j] == 2) {
        double.push(key_j);
    }
}

console.log(double);
