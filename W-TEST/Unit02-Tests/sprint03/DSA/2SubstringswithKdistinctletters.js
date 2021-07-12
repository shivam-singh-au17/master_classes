
function DistinctSubstrings(str, K) {

    var N = str.length;
    var answer = 0;
    var map = new Map();

    for (var i = 0; i < K; i++) {

        if (map.has(str[i]))
            map.set(str[i], map.get(str[i]) + 1)
        else
            map.set(str[i], 1)
    }

    if (map.size == K)
        answer++;

    for (var i = K; i < N; i++) {

        if (map.has(str[i]))
            map.set(str[i], map.get(str[i]) + 1)
        else
            map.set(str[i], 1)

        if (map.has(str[i - K]))
            map.set(str[i - K], map.get(str[i - K]) - 1)

        if (map.has(str[i - K]) && map.get(str[i - K]) == 0) {
            map.delete(str[i - K]);
        }

        if (map.size == K) {
            answer++;
        }
    }

    return answer;
}



function runProgram(input) {

    var Input = input.split("\n");

    var NandK = Input[0].split(" ").map(Number);
    var k = NandK[1]

    var str = Input[1];

    var ans = DistinctSubstrings(str, k);
    console.log(ans);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 2
abcc`);
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


