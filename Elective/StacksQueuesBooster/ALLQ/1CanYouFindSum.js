
function canYouFindSum(arr) {

    let Stk_1 = [];
    let Stk_2 = [];
    let Idx_1 = [];
    let Idx_2 = [];
    let Res_1 = [];
    let Res_2 = [];

    for (let i = 0; i < arr.length; i++) {

        if (Stk_1 == "") {
            Res_1.push(-1);
        } else {
            if (Stk_1[Stk_1.length - 1] > arr[i]) {
                Res_1.push(Idx_1[Idx_1.length - 1] + 1);
            } else {
                while (Stk_1[Stk_1.length - 1] <= arr[i] && Stk_1.length > 0) {
                    Stk_1.pop();
                    Idx_1.pop();
                }
                if (Stk_1 == "") {
                    Res_1.push(-1);
                } else {
                    Res_1.push(Idx_1[Idx_1.length - 1] + 1);
                }
            }
        }

        Stk_1.push(arr[i]);
        Idx_1.push(i);

    }

    for (let i = arr.length - 1; i >= 0; i--) {

        if (Stk_2 == "") {
            Res_2.push(-1);
        } else {
            if (Stk_2[Stk_2.length - 1] > arr[i]) {
                Res_2.push(Idx_2[Idx_2.length - 1] + 1);
            } else {
                while (Stk_2[Stk_2.length - 1] <= arr[i] && Stk_2.length > 0) {
                    Stk_2.pop();
                    Idx_2.pop();
                }
                if (Stk_2 == "") {
                    Res_2.push(-1);
                } else {
                    Res_2.push(Idx_2[Idx_2.length - 1] + 1);
                }
            }
        }

        Idx_2.push(i);
        Stk_2.push(arr[i]);

    }


    Res_2.reverse();
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        ans.push(Res_1[i] + Res_2[i]);
    }

    console.log(ans.join(" "));

}


function runProgram(input) {

    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);
    canYouFindSum(arr)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
1 2 3 4 5 6 2 9 7 8`);
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