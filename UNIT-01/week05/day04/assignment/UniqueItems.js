
var items = ['a', 'b', 'c', 'd', 'a', 'c'];


var item_obj = {};
for (var i = 0; i < items.length; i++) {
    var key = items[i];
    if (item_obj[key] == undefined) {
        item_obj[key] = 1
    } else {
        var prev_count = item_obj[key]
        item_obj[key] = prev_count + 1
    }
}

var twice_Num = []
for (key in item_obj) {
    if (item_obj[key] == 2) {
        twice_Num.push(key)
    }
}
console.log(twice_Num);

