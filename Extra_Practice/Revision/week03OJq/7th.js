
function reduceString(str) {
    var temp = str[0];
    var count = 1;
    var res = "";
    for (var i = 1; i < str.length; i++) {
        if (str[i] == temp) {
            count++;
        } else {
            if (count % 2 != 0) {
                res += temp;
                count = 1;
                temp = str[i];
            } else {
                res += "";
                count = 1;
                temp = str[i];
            }
        }
    }
    if (count % 2 != 0) {
        res += temp;
    } else {
        res += "";
    }
    if (res == "") {
        return "Empty String"
    } else {
        return res;
    }
}


function runProgram(input) {

    var newInput = input;

    var ans = reduceString(newInput);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`aaabccddd`);
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

