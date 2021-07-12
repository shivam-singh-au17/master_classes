// TODO:



function findTwoEqualStr(arr) {

    var obj = {};
    for (var i = 0; i < arr.length; i++) {

        var key = arr.charCodeAt(i);

        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            prev = obj[key];
            obj[key] = prev + 1;
        }
    }
    // console.log(obj);
    var temp = true
    for (key in obj) {
        if (obj[key] >= 2) {
            temp = false
            break;
        }
    }
    return temp;
}


function DistinctSubstrings(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var subStr = "";
        for (var j = i; j < str.length; j++) {
            subStr += str[j];
            if (findTwoEqualStr(subStr) == true) {
                count++;
            }
            // console.log(subStr);
        }
    }
    return count;
}



function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var str = Input[i * 2];

        var ans = DistinctSubstrings(str);
        console.log(ans);

        // findTwoEqualStr(str)
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
abcde
3
aaa`);
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


