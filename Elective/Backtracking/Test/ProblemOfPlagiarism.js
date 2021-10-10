
function findOddNum(str, L, R) {

    let sum = 0;
    for (let i = L; i <= R; i++) {
        if (str[i] % 2 == 1) {
            sum += str[i];
        }
    }
    if (sum % 2 == 1) {
        return true;
    } else {
        return false;
    }

}


function swap(a, i, j) {
    let temp;
    let charArry = a.split("");
    temp = charArry[i]
    charArry[i] = charArry[j]
    charArry[j] = temp;
    let res = charArry.join("")
    return res
}



function findKOddSubSet(str, L, R) {
    let low = 0;
    let high = str.length - 1;
    let count = 0;
    function ProblemPlagiarism(str, low, high) {
        if (low == high) {
            if (findOddNum(str.trim().split(" ").map(Number), L, R) == true) {
                count++
            }
        } else {
            for (let i = low; i <= high; i++) {
                str = swap(str, low, i);
                ProblemPlagiarism(str, low + 1, high);
                str = swap(str, low, i);
            }
        }
        return count;
    }
    return ProblemPlagiarism(str, low, high)
}


function runProgram(input) {

    let newData = input.split("\n");
    let num = Number(newData[0]);
    let LandR = newData[1].split(" ").map(Number);
    let L = LandR[0];
    let R = LandR[1];
    let myArr = "";
    for (let i = 1; i <= num; i++) {
        myArr += i;
    }
    console.log(findKOddSubSet(myArr, L, R));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
0 1`);
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
