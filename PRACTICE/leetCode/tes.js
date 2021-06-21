var isValid = function (s) {
    var validStart = ["[", "{", "("];

    var define = {
        "[": "]",
        "(": ")",
        "{": "}"
    };

    var arr = s.split("");

    for (var i = 0; i < arr.length; i++) {
        if (validStart.includes(arr[i]) && arr[i + 1] === define[arr[i]]) {
            arr.splice(i, 2);
            i = i - 2;
        }
    }

    return !arr.length ? true : false;
};