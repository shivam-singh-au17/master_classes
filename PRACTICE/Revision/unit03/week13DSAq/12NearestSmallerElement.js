

function NearestSmallerElement(arr) {

    let R_Min = [-1]
    let R_Stk = [arr.length - 1]
    let L_Min = [-1]
    let L_Stk = [0]

    for (let i = arr.length - 2; i >= 0; i--) {
        while (arr[R_Stk[R_Stk.length - 1]] >= arr[i]) {
            R_Stk.pop()
        }
        if (arr[R_Stk[R_Stk.length - 1]] < arr[i]) {
            R_Min.push(R_Stk[R_Stk.length - 1])
            R_Stk.push(i)
        }
        if (R_Stk.length == 0) {
            R_Min.push(-1)
            R_Stk.push(i)
        }
    }

    R_Min.reverse()

    for (let i = 1; i < arr.length; i++) {
        while (arr[L_Stk[L_Stk.length - 1]] >= arr[i]) {
            L_Stk.pop()
        }
        if (arr[L_Stk[L_Stk.length - 1]] < arr[i]) {
            L_Min.push(L_Stk[L_Stk.length - 1])
            L_Stk.push(i)
        }
        if (L_Stk.length == 0) {
            L_Min.push(-1)
            L_Stk.push(i)
        }
    }

    let resStack = []

    for (let i = 0; i < arr.length; i++) {
        if (L_Min[i] == -1 && R_Min[i] == -1) {
            resStack.push(-1)
        }
        else if (L_Min[i] == -1) {
            resStack.push(R_Min[i])
        }
        else if (R_Min[i] == -1) {
            resStack.push(L_Min[i])
        }
        else {
            if (Math.abs(i - L_Min[i]) < Math.abs(i - R_Min[i])) {
                resStack.push(L_Min[i])
            }
            else if (Math.abs(i - L_Min[i]) > Math.abs(i - R_Min[i])) {
                resStack.push(R_Min[i])
            }
            else {
                resStack.push(L_Min[i])
            }
        }
    }

    for (let i = 0; i < resStack.length; i++) {
        if (resStack[i] != -1) {
            resStack[i] = arr[resStack[i]]
        }
    }
    console.log(resStack.join(" "))
}




function runProgram(input) {

    input = input.trim().split("\n")
    let testCases = Number(input[0])

    for (let i = 1; i <= testCases; i++) {

        let arr = input[2 * i].trim().split(" ").map(Number);
        NearestSmallerElement(arr);

    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1
8
39 27 11 4 24 32 32 1`);
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


