
function SimilarTexts(text1, text2) {

    let temp = [];
    let max = 0;

    for (let i = 0; i <= text1.length; i++) {
        temp.push(new Array(text2.length + 1).fill(0));
    }
    
    for (let i = 1; i < temp.length; i++) {
        for (let j = 1; j < temp[0].length; j++) {

            if (text1[i - 1] === text2[j - 1]) {
                temp[i][j] = temp[i - 1][j - 1] + 1

            } else {
                temp[i][j] = Math.max(temp[i - 1][j], temp[i][j - 1]);
            }

            max = Math.max(max, temp[i][j]);
        }
    }
    return max;
};




function runProgram(input) {

    let Input = input.split('\n');
    let str1 = Input[0]
    let str2 = Input[1]
    console.log(SimilarTexts(str1, str2));

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`AEDFHR
ABCDGH`);
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