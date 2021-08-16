
function removeDuplicates(str) {
    if (str.length == 0) {
        return "Empty String"
    }
    if (str.length == 1) {
        return str;
    } else {
        let temp = "";
        for (let i = 0; i < str.length; i++) {
            if (i == 0) {
                if (str.charAt(i) != str.charAt(i + 1)) {
                    temp += str.charAt(i)
                }
            } else if (i == (str.length - 1)) {
                if (str.charAt(i) != str.charAt(i - 1)) {
                    temp += str.charAt(i)
                }
            } else {
                if (str.charAt(i) != str.charAt(i - 1) && str.charAt(i) != str.charAt(i + 1)) {
                    temp += str.charAt(i)
                }
            }
        }
        if (str.length == temp.length) {
            return temp;
        } else {
            return removeDuplicates(temp)
        }
    }

}


function runProgram(input) {

    let Input = input.split("\n");
    let testcases = Number(Input[0]);

    for (let i = 1; i <= testcases; i++) {

        let str = Input[i];

        let ans = removeDuplicates(str);
        console.log(ans)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
acaaabbbacdddd
qpaaaaadaaaaadprq
aaaacddddcappp
caaabbbaac
azxxxzy`);
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