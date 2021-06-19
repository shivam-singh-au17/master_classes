
function Palindrome(numStr) {

    var n = numStr.length;
    var first = 0;
    var last = n - 1;
    var ans = true;

    while (first <= last) {
        if (numStr[first] != numStr[last]) {
            ans = false;
            break;
        } else {
            first++;
            last--;
        }
    }
    if (ans == true) {
        return "Yes";
    } else {
        return "nO"
    }

}


function runProgram(input) {

    var Input = input;
    var ans = Palindrome(Input);
    console.log(ans);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`shiihs`);
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

