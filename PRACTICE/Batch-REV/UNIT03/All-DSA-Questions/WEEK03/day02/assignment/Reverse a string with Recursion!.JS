function runProgram(input) {
    var a = input
    function main() {
        console.log(rev(a))
    }
    function rev(a) {
        if (a == 0) {
            return a
        }
        else {
            let n = a.length
            return a.charAt(n - 1) + rev(a.slice(0, n - 1))
        }

    }
    main()
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});