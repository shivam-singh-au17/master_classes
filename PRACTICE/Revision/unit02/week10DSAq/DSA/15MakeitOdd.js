


// TODO:


function MakeItOdd(arr) {
    let start = 0;
    let end = 1;
    var temp = true;
    while (start < arr.length && end < arr.length) {
        if ((arr[start] + arr[end]) % 2 == 1) {
            start++;
            end++;
        }
        else {
            temp = false;
            break;

        }
    }
    if (temp == true) {
        return "Yes"
    } else {
        return "No"
    }
}



function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr = Input[i * 2].trim().split(" ").map(Number);

        var ans = MakeItOdd(arr);
        console.log(ans);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`5
5
1 1 1 1 1
4
1 1 1 1
5
1 1 1 1 2
5
0 1 1 0 0
1
1`);
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

// YES
// NO
// YES
// YES
// YES