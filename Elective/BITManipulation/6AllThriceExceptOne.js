
function AllThriceExceptOne(arr) {

    let ans = 0;
    for (let i = 0; i < 32; i++) {

        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (((arr[j] >> i) & 1) == 1)
                sum++;
            
        }

        sum %= 3;

        if (sum != 0) {
            ans |= sum << i;
        }
    }
    return ans;
}
    

function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {
        var arr = input[i * 2].split(" ").map(Number);
        var res = AllThriceExceptOne(arr);
        console.log(res);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
7
1 3 1 3 1 2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
