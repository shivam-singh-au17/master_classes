
function checkPalindrom(str) {
    var temp = true;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            temp = false;
            break;
        }
    }
    return temp;
}


function findSubStribg(str) {
    var maxLength = 0
    for (var i = 0; i < str.length; i++) {
        var subStr = ""
        for (var j = i; j < str.length; j++) {
            subStr += str[j];

            if (checkPalindrom(subStr) == true) {
                maxLength = Math.max(maxLength, subStr.length)
            }

        }
    }
    return maxLength
}



function runProgram(input) {

    var newInput = input;

    var result = findSubStribg(newInput);
    console.log(result);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`thisracecarisgood`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });

}

