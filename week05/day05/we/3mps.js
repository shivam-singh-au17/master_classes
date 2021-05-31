
function palindrome(data) {
    var result = true;
    for (var i = 0; i < data.length; i++) {
        if (data[i] != data[data.length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}


function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var data = newInput[0];
    var temp = 0;
    for (var i = 0; i < data.length; i++) {
        var substr = "";
        for (var j = i; j < data.length; j++) {
            substr += data[j]
            var result = palindrome(substr);

            if (result == true) {
                if (substr.length > temp) {
                    temp = substr.length
                }
            }

        }
    }
    console.log(temp)


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

