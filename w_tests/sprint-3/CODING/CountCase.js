// Given an array of string count the no of characters in lower Case
// Screenshot of the output for the following array of strings ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]

var str = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];
var smallLatters = 'abcdefghijklmnopqrstuvwxyz';

function addStr(str) {
    var newarr = ""
    for (var i = 0; i < str.length; i++) {
        newarr += str[i]
    }
    return newarr;
}

function countSmaal(newarr, smallLatters) {
    var count = 0;
    for (var j = 0; j < newarr.length; j++) {
        for (var k = 0; k < smallLatters.length; k++) {
            if (newarr[j] == smallLatters[k]) {
                count++;
            }
        }
    }
    return count;
}

var arr = addStr(str);
var countSmall = countSmaal(arr, smallLatters);
console.log(countSmall);


