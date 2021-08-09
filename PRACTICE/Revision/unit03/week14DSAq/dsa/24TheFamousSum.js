
function TheFamousSum(n, k) {
    if (n < 10) {
        return n;
    } 
    else {
        let res = TheFamousSum(n.toString().split('').reduce((sum, num) => sum + (num | 0), 0) * k, 1);
        return res;
    }
}

function runProgram(input) {

    var nAndk = input.split(" ").map(Number);
    var n = nAndk[0]
    var k = nAndk[1]

    var ans = TheFamousSum(n, k);
    console.log(ans)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 100000`);
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
