
function GreaterElements(arr, NEXeLM, temp) {

    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {

        while (stack.length != 0 && ((temp == 'BIG') ? arr[stack[stack.length - 1]] <= arr[i] : arr[stack[stack.length - 1]] >= arr[i])) {
            stack.pop();
        }

        if (stack.length != 0)
            NEXeLM[i] = stack[stack.length - 1];
        else
            NEXeLM[i] = -1;
        
        stack.push(i);

    }
}

function NextSmallerNextGreater(arr) {

    let nexGre = new Array(arr.length)
    let rigSma = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {

        nexGre[i] = 0;
        rigSma[i] = 0;

    }

    GreaterElements(arr, nexGre, "BIG")
    GreaterElements(arr, rigSma, "SMALL")

    let res = ""
    for (var i = 0; i < arr.length; i++) {
        if (nexGre[i] != -1 && rigSma[nexGre[i]] != -1) {
            res += arr[rigSma[nexGre[i]]] + " ";
        } else {
            res += -1 + " "
        }
    }
    return res
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr = Input[i * 2].trim().split(" ").map(Number);

        let ans = NextSmallerNextGreater(arr);
        console.log(ans);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1
6
5 1 6 2 5 1`);
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