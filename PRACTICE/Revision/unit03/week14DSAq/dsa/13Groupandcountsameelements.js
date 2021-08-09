

function GroupAndCount(num) {

    if (num == 1)
        return "1";
    if (num == 2)
        return "11";

    let str = "11";

    for (let i = 3; i <= num; i++) {

        str += 'y';
        let len = str.length;
        let count = 1;
        let temp = "";
        let arr = str.split("");

        for (let j = 1; j < len; j++) {

            if (arr[j] != arr[j - 1]) {
                temp += count + 0;
                temp += arr[j - 1];
                count = 1;
            } else {
                count++;
            } 
        }

        str = temp;
    }

    return str;

}

function runProgram(input) {

    var Input = input.trim().split("\n");
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {
        var num = Number(Input[i])

        var ans = GroupAndCount(num);
        console.log(ans)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
2
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
