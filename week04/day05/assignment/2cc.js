
function charCount(items) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] != 'a' && items[i] != 'e' && items[i] != 'i' && items[i] != 'o' && items[i] != 'u') {
            count++
        }
    }
    return count;
}

function runProgram(input) {

    var newInput = input;
    
    var result1 = charCount(newInput);
    console.log(result1);

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