

function StringWithParenthesis(str) {

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

    var data = input;

    if (StringWithParenthesis(data) == true) {
        console.log("balanced");
    } else {
        console.log("unbalanced");
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


