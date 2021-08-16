
function sumCount(str) {
    if (str.length == 0) {
        return 0
    }
    else if (str.length == 1) {
        return Number(str);
    }
    temp = 0
    for (i = 0; i < str.length; i++) {
        temp = temp + Number(str.charAt(i))
    }
    return sumCount(String(temp))
}


function TheFamousSum(n, k) {
    let ans = sumCount(String(n))
    ans = ans * k
    console.log(sumCount(String(ans)))
}


function runProgram(input) {

    var nAndk = input.split(" ");
    var n = nAndk[0]
    var k = nAndk[1]

    TheFamousSum(n, k);
   

}

if (process.env.USERNAME === "shiva") {
    runProgram(`35436736 100000`);
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
