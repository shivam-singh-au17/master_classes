
function birthdayShopping(n, k) {
    let temp = []
    let result = []

    function helper(idx, n, k) {
        if (temp.length == k) {
            result.push([...temp])
        }

        for (let i = idx; i <= n; i++) {
            temp.push(i)
            helper(i + 1, n, k)
            temp.pop()
        }
    }
    helper(1, n, k);
    return result
};

function runProgram(input) {

    let NandK = input.split(" ").map(Number);
    let N = NandK[0];
    let K = NandK[1];
    let matRes = birthdayShopping(N, K)
    matRes.forEach((item) => {
        console.log(item.join(" "));
    })

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3 1`);
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