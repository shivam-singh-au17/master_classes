function Separation(str) {
    var res1 = "";
    var res2 = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            res1 += str[i]
        } else {
            res2 += str[i]
        }
    }
    
    return (res1 + res2);
}


function runProgram(input) {

    var Input = input.split("\n")
    var inputTimes = Number(Input[0]);

    for (var i = 1; i <= inputTimes; i++){
        
        var inputArr = Input[i*2];
        var ans1 = Separation(inputArr);
        console.log(ans1);
    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`1
6
rutwik`);
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
