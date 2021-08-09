
function myFunction(strArrauy) {

    var arr = [];
    for (var i = 0; i < strArrauy.length; i++) {
        if (strArrauy[i] != '#') {
            arr.push(strArrauy[i]);
        } else {
            arr.pop()
        }
    }
    var arrRes = arr.join("")
    return arrRes;

}

