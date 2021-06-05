
function makeFrind(age) {
    
    if (age < 13 ) {
        return '1 KM'
    } else if (age >= 13 && age < 18) {
        return '5 KM'
    } else if (age >= 18 && age < 30) {
        return '10 KM'
    } else {
        return 'You Have Friend Anyehere'
    }
}


function runProgram(input) {
    
    var age = Number(input);
    
    var result = makeFrind(age);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`30`);
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
