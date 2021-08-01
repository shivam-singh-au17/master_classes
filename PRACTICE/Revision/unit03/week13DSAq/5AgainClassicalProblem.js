

function AgainClassicalProblem(str) {

    let stack = [];

    for (let i = 0; i < str.length; i++) {

        if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
            stack.push(str[i]);
            continue;
        }

        if (stack.length == 0)
            return false;

        let check = "";

        switch (str[i]) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (stack.length == 0);
}



function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {

        var data = input[i];

        if (AgainClassicalProblem(data) == true) {
            console.log("balanced");
        } else {
            console.log("not balanced");
        }

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
{([])}
()
([]`);
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


