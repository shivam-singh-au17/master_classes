
function revStr(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res;
}

function StringCut(str) {

    var mid = Math.floor(str.length / 2)
    if (str.length % 2 == 0) {

        var halfstr1 = ""
        for (var i = 0; i < mid; i++) {
            halfstr1 += str[i]
        }
        var recStr1 = revStr(halfstr1);


        var halfstr2 = ""
        for (var i = mid; i < str.length; i++) {
            halfstr2 += str[i]
        }
        var recStr2 = revStr(halfstr2);

        var ans = recStr1 + recStr2
        console.log(ans)

    } else {

        var halfstr1 = ""
        for (var i = 0; i < mid; i++) {
            halfstr1 += str[i]
        }
        var recStr1 = revStr(halfstr1);


        var halfstr2 = ""
        for (var i = mid + 1; i < str.length; i++) {
            halfstr2 += str[i]
        }
        var recStr2 = revStr(halfstr2);

        var ans = recStr1 + str[mid]+ recStr2
        console.log(ans)
    }
}



function runProgram(input) {

    StringCut(input)
    
}

if (process.env.USERNAME === "shiva") {
    runProgram(`abcrxyz`);
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

