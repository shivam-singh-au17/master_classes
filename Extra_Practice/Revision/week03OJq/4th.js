
function reverse(items) {
    var res = "";
    for (var i = items.length -1 ; i >= 0; i--){
        res  += items[i]
    }
    return res
}

function runProgram(input) {

    var newInput = input;
    var ans = reverse(newInput);
    console.log(ans);
    
}

if (process.env.USERNAME === "shiva") {
    runProgram(`masaischool`);
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