function strSort(str) {
    return str.split("").sort().join("")
}

function AnAnagramProblem(strArr) {

    let obj = {};
    for (let i = 0; i < strArr.length; i++) {
        let key = strSort(strArr[i]);
        if (obj[key] == undefined) {
            obj[key] = strArr[i];
        } 
    }
    let myArr = [];
    for (let i in obj) {
        myArr.push(obj[i]);
    }
    let myRes = myArr.sort()
    console.log(myRes.length)
    myRes.map((el) => {
        console.log(el);
    })

}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    let strArr = [];
    for (let i = 1; i <= testCases; i++) {
        let str = newInput[i];
        strArr.push(str);
    }
    AnAnagramProblem(strArr)
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5
eodc
odec
code
baca
aabc`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\len$/, "");
        read = read.replace(/\len$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\len$/, "");
        runProgram(read);
        process.exit(0);
    });
}

