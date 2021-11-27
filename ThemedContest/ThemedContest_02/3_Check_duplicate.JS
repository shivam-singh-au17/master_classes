
function CheckDuplicate(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            prev_obj = obj[key];
            obj[key] = prev_obj + 1;
        }
    }
    let count = 0;
    for (let i in obj) {
        if (obj[i] > 1) {
            count++;
        } 
    }
    if (count >= 1) {
        return "YES"
    } else {
        return "NO"
    }

}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0])
    for (let i = 1; i <= testCases; i++) {
        let arr = newInput[i * 2].split(" ").map(Number);
        console.log(CheckDuplicate(arr))
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
41
136 753 83 800 303 484 619 847 729 341 634 820 538 333 251 288 951 24 846 85 940 598 381 832 97 635 566 40 874 627 111 901 103 901 964 816 307 320 271 423 309`);
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

