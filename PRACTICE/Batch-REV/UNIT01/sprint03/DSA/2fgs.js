

function countVovels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ) {
            count++;
        }
    }
    return count;
}

function printResult(num, count) {
    if (num / 2 <= count) {
        return 'Feel Good!'
    } else {
        return 'Feel Bad!'
    }
}

function runProgram(input) {

    var Input = input.split("\n")
    var num = Number(Input[0]);
    var newInput = Input[1];

    var result = countVovels(newInput);
    var ans = printResult(num, result)
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`12
abfeiyjakoll`);
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
