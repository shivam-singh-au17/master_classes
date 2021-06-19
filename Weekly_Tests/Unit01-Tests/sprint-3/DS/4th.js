
function bigLength(str) {
    var count = 1;
    var temp = str[0]
    var res = [];
    for (var i = 1; i <= str.length; i++) {
        if (str[i] == temp) {
            count++
        } else {
            res.push(count);
            temp = str[i]
            count = 1
        }
    }
    return res
}

function maxPrint(arr) {
    max = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function runProgram(input) {

    var Input = input;

    var ans = bigLength(Input);
    var ans2 = maxPrint(ans);

    console.log(ans2);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`ATTCGGGATTTTTTTTTTTTTTTTTTTT`);
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
