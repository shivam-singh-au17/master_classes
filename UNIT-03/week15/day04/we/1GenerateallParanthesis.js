

function allParanthesis(n) {

    let count = 0;
    let ans = [];
    function generate(str, open, close) {
        if (open > 0) {
            generate(str + '(', open - 1, close + 1)
        }
        if (close > 0) {
            generate(str + ')', open, close - 1);
        }
        if (open == 0 && close == 0) {
            count++;
            ans.push(str)
        }
        return count;
    }
    generate("(", n - 1, 1);
    console.log(count);
    return ans;
};


function runProgram(input) {

    var newData = input.split("\n");
    var testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let res = allParanthesis(Number(newData[i]))
        for (let j = 0; j < res.length; j++){
            console.log(res[j])
        }
        
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
3
2
1
`);
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
