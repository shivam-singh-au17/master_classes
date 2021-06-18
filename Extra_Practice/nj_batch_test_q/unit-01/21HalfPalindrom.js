
var str = "ababcb";

var newStrEven = "";
for (var i = 0; i < str.length / 2 ; i++) {
   
        newStrEven += str[i];
    
}



var newStrOdd = "";
for (var i = str.length / 2; i < str.length; i++) {
   
        newStrOdd += str[i];
    
}




function revTheStr(str) {
    var res = ""
    for (var j = str.length - 1; j >= 0; j--) {
        res += str[j];
    }
    return res;
}


if (newStrEven == revTheStr(newStrEven) && newStrOdd == revTheStr(newStrOdd) ) {
    console.log("Yes");
} else {
    console.log("No");
}