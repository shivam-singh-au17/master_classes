
function findDataType(items, str) {
    var count = 0;
    for (var i = 0; i < items.length; i++){
        if (items[i] == '0' || items[i] == '1' || items[i] == '2' || items[i] == '3' || items[i] == '4' || items[i] == '5' || items[i] == '6' || items[i] == '7' || items[i] == '8' || items[i] == '9') {
            count ++
        }
    }
    if (count == str) {
        return 'numbers'
    } else if (count < str && count != 0) {
        return 'alphanumeric'
    } else if (count == 0) {
        return 'chars'
    }
}


function runProgram(input) {

    var newInput = input.split("\n");
    // var input1 = newInput[0]
    var input1 = Number(newInput[0]);
    var input2 = newInput[1]

    var ans = findDataType(input2, input1);
    console.log(ans);
    
}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
12345`);
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