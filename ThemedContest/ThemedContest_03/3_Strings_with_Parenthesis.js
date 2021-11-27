

function StringsWithParenthesis(str) {


    let stack = [];
    for (let i = 0; i < str.length; i++) {

        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        }

        if (stack.length == 0) {
            return false;
        }

        let temp;
        switch (str[i]) {
            case ')':
                temp = stack.pop();
                if (temp == '{' || temp == '[') {
                    return false;
                }
                break;

            case '}':
                temp = stack.pop();
                if (temp == '(' || temp == '[') {
                    return false;
                }
                break;

            case ']':
                temp = stack.pop();
                if (temp == '(' || temp == '{') {
                    return false;
                }
                break;
        }

    }

    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }


}


function runProgram(input) {

    let newInput = input;
    let ans = StringsWithParenthesis(newInput)
    if (ans == true) {
        console.log("balanced");
    } else {
        console.log("unbalanced");
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`{{)[](}}`);
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

