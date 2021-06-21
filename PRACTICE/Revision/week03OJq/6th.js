
function findSubString(items, subString) {
    var string = false
    for (var i = 0; i < items.length; i++) {
        var result = "";
        for (var j = i; j < items.length; j++) {
            result += items[j]
            if (result == subString) {
                string = true
            }
        }
    }
    if (string == true) {
        return "Yes"
    } else {
        return 'No'
    }
}


function runProgram(input) {

    var newInput1 = input.split("\n");
 
    var ans = findSubString(newInput1[0], newInput1[1]);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`masai
saim`);
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