



function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);


    let Stk_1 = [];
    let Stk_2 = [];

    function append(val) {
        Stk_1.push(val)
    }


    function remove() {

        if (Stk_1.length == 0) {
            if (Stk_2.length == 0) {
                console.log(-1);
                return;
            }
        } else {
            while (Stk_1.length != 0) {
                let num = Stk_1.pop();
                Stk_2.push(num);
            }
        }
        let res = Stk_2.pop()
        return res;

    }

    for (var i = 1; i <= testCases; i++) {

        var data = input[i].split(" ").map(Number);

        if (data[0] == 0) {
            append(data[1])
        }
        if (data[0] == 1) {
            if (Stk_1.length != 0) {
                console.log(Stk_1[0]); 
            } else {
                console.log(Stk_2[Stk_2.length - 1]);
            }
        }
        if (data[0] == 2) {
           let kkk =  remove()
        }

    }

}



if (process.env.USERNAME === "shiva") {
    runProgram(`11
0 201
0 238
0 106
0 617
1
0 844
1
0 381
2
1
2`);
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

