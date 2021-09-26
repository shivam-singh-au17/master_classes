
function CureDisease(arr1, arr2) {
    var temp = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= arr2[i]) {
            continue;
        } else {
            temp = false;
            break;
        }
    }
    if (temp) {
        console.log("Yes")
    }else {
        console.log("No")
    }

}

function runProgram(input) {

    let Input = input.split("\n");

    let arr1 = Input[1].split(" ").map(Number);
    let arr2 = Input[2].split(" ").map(Number);
    CureDisease(arr1, arr2);
    
}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5
123 146 454 542 456
100 328 248 689 200`);
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