
function encrypt(str, s) {

    let result = ""

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
            result += ch;

        } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
            result += ch;

        } else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
            ch = String.fromCharCode((char.charCodeAt(0) + s - 48) % 10 + 48);
            result += ch;

        } else {
            result += char
        }

    }

    return result;
    
}


function runProgram(input) {

    var Input = input.trim().split("\n");

    var str = Input[0]
    var n = Number(Input[1])

    var ans = encrypt(str, n);
    console.log(ans)


}

if (process.env.USERNAME === "shiva") {
    runProgram(`All-convoYs-9-be:Alert1.
4`);
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
