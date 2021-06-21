
function goodString(items) {
    var temp = items[0]
    var count = 1;
    var result = ""
    for (var i = 0; i < items.length; i++){
        if (items[i] == temp) {
            count++
        } else {
            result += temp;
            count = 1
            temp = items[i]
        }
    }
    result += temp;
    return result;
}

function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[0]);
    
    for (var i = 1; i <= InputTimes; i++){
        var newInput = Input[i];
      
        var ans = goodString(newInput);
        console.log(ans);
    }


}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
abb
aaab
ababa`);
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