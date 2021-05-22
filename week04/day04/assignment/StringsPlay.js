
var strInput = "Early Monday     morning   MUSIC";

var input = strInput.split(" ")
var arrInput = input.filter(function (items) {
    return items !== ""
}).map(function (items) {
    return items.toLowerCase()
})


function toCamalCase(items) {
    var result = items[0]
    for (var i = 1; i < items.length; i++) {
        var element = items[i]
        var temp = element[0].toUpperCase()
        temp += items[i].slice(0)
        result += temp
    }
    console.log(result);
}

function toSnakeCase(items) {
    var result = items[0]
    for (var i = 0; i < items.length; i++){
        result += "_" + items[i]
    }
    console.log(result);
}

function toHypenCase(items) {
    var result = items.reduce(function (items1, items2) {
        return items1 + "-" + items2;
    })
    console.log(result);
}

toSnakeCase(arrInput);
toHypenCase(arrInput);
toCamalCase(arrInput);