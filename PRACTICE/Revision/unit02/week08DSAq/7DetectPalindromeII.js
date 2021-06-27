function DetectPalindrome(str) {

    var object = {};
    for (var i = 0; i < str.length; i++) {
        var key = str[i];
        if (object[key] == undefined) {
            object[key] = 1;
        } else {
            var prev_object = object[key];
            object[key] = prev_object + 1;
        }
    }

    var k = 0;
    var flag = false;
    for (key in object) {
        if (object[key] % 2 == 0) {
            flag = true;
        }
        else if (object[key] % 2 != 0 && k == 0) {
            flag = true;
            k++;
        }
        else if (object[key] % 2 != 0 && k != 0) {
            flag = false;
            break;

        }
    }
    if (flag == 1) {
        console.log("Possible!");
    }
    else {
        console.log("Not Possible!");
    }


}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var str = Input[i * 2];
        DetectPalindrome(str)
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
6
aabbcc
5
aabcd`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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


