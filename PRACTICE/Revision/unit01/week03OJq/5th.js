function runProgram(input) {

    var Input = input;
    var n = Input.length;
    var temp = Input[0]
    var count = 1;
    var result = "";

    for (var i = 1; i < n; i++) {
        if (Input[i] == temp) {
            count++;
        } else {
            if (count % 2 != 0) {
                result += temp;
                count = 1;
                temp = Input[i];
            }
            result += "";
            count = 1;
            temp = Input[i];
        }
    }
    if (count % 2 != 0) {
        result += temp;
    } else {
        result += "";
    }
    if (result == "") {
        console.log("Empty String");
    } else {
        console.log(result);
    }
    

}

if (process.env.USERNAME === "shiva") {
    runProgram(`aabbccdd`);
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