

function runProgram(input) {

    let Input = input.trim().split("\n").map(Number);

    let Stk_1 = [];
    let Stk_2 = [];

    for (let i = 1; i < Input.length; i++) {
        if (i == Input.length - 1) {
            Stk_1.push([-1, i]);
        }
        for (let j = i + 1; j < Input.length; j++) {
            if (Input[i] < Input[j]) {
                Stk_1.push([Input[j], j]);
                break;
            }
            else if (j == Input.length - 1) {
                Stk_1.push([-1, j]);
            }
        }
    }

    for (let i = 0; i < Stk_1.length; i++) {
        let temp_1 = (Stk_1[i])[1];
        let temp_2 = (Stk_1[i])[0];

        if (temp_2 == -1) {
            Stk_2.push(-1);
        }
        for (j = temp_1 + 1; j < Input.length; j++) {

            if (temp_2 > Input[j]) {
                Stk_2.push(Input[j]);
                break;
            } else if (j == Input.length - 1) {
                Stk_2.push(-1);
            }

        }
    }

    console.log(Stk_2.join(" "));

}


if (process.env.USERNAME === "shiva") {
    runProgram(`10
1
6
2
10
2
3
2
10
6
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


