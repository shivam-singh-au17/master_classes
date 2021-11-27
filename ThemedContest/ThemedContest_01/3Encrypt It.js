
function EncryptIt(str, rota) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let temp = str.charCodeAt(i)
        if (temp >= 65 && temp <= 90) {
            let newTemp = temp + rota % 26;
            if (newTemp <= 90) {
                res += String.fromCharCode(newTemp);
            } else {
                res += String.fromCharCode(newTemp - 26);
            }
        } else if (temp >= 97 && temp <= 122) {
            let newTemp = temp + rota % 26;
            if (newTemp <= 122) {
                res += String.fromCharCode(newTemp);
            } else {
                res += String.fromCharCode(newTemp - 26);
            }
        } else if (temp >= 48 && temp <= 57) {
            let newTemp = temp + rota % 10;
            if (newTemp <= 57) {
                res += String.fromCharCode(newTemp);
            } else {
                res += String.fromCharCode(newTemp - 10);
            }
        } else {
            res += String.fromCharCode(temp);
        }
    }
    return res;
}



function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[0];
    let rota = Number(newInput[1]);
    console.log(EncryptIt(str, rota));
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`----------a
100`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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
