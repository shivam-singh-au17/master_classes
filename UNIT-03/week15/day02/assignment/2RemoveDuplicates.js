var removeDuplicates = function (S, K) {
    for (let i = 1, count = 1; i < S.length; i++) {
        S.charAt(i) === S.charAt(i - 1) ? count++ : count = 1
        if (count === K)
            S = removeDuplicates(S.slice(0, i - K + 1) + S.slice(i + 1), K);
    }
    return S
};


function runProgram(input) {

    let Input = input.split("\n");
    let testcases = Number(Input[0]);

    for (let i = 1; i <= testcases; i++) {

        let str = Input[i].split("");

        let ans = removeDuplicate(str);
        console.log(ans)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
azxxxzy
caaabbbaac
gghhg
aaaacddddcappp`);
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