

var arr1 = [1, 2, 3, 4];
var arr2 = [2, 4, 6, 8];


var arrObj1 = {};

for (var i = 0; i < arr1.length; i++){
    var key1 = arr1[i];
    if (arrObj1[key1] == undefined) {
        arrObj1[key1] = 1
    } else {
        var prevCount = arrObj1[key1];
        arrObj1[key1] = prevCount + 1;
    }
}

console.log(arrObj1);


var arrObj2 = {};

for (var i = 0; i < arr2.length; i++){
    var key2 = arr2[i];
    if (arrObj2[key2] == undefined) {
        arrObj2[key2] = 1
    } else {
        var prevCount = arrObj2[key2];
        arrObj2[key2] = prevCount + 1;
    }
}

console.log(arrObj1);

var commanEle = []
for (key1 in arrObj1) {
    for (key2 in arrObj2) {
        if (key1 == key2) {
            commanEle.push(key1);
        }
    }
}
console.log(commanEle);

