
// var str1 = 'listen';
// var str2 = 'silent';

// var str1 = 'here';
// var str2 = 'heir';

var str1 = 'wind';
var str2 = 'dwine';


var str1_obj = {};
for (var i = 0; i < str1.length; i++) {
    var key = str1[i];
    if (str1_obj[key] == undefined) {
        str1_obj[key] = 1
    } else {
        var prev_count = str1_obj[key]
        str1_obj[key] = prev_count + 1
    }
}

var str2_obj = {};
for (var i = 0; i < str1.length; i++) {
    var key = str2[i];
    if (str2_obj[key] == undefined) {
        str2_obj[key] = 1
    } else {
        var prev_count = str2_obj[key]
        str2_obj[key] = prev_count + 1
    }
}

var count = 0
temp = false
for (key1 in str1_obj) {
    for (key2 in str2_obj) {
        count++
        if (key1 == key2 && count == str1.length) {
            temp = true
        }
    }
}
if (temp == true) {
    console.log(true);
} else {
    console.log(false);
}


