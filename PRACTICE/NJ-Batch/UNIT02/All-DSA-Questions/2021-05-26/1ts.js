function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let a = 0; a < t; a++) {
        var n = input[2 * a + 1].split(" ").map(Number);
        var length = n[0];
        var k = n[1];
        var arr = input[2 * a + 2].split(" ").map(Number);


        function twoSum(array, k) {
            let start = 0;
            let end = array.length - 1;
            while (start < end) {
                if (array[start] + array[end] === k) {
                    return `${start} ${end}`;
                }
                else if (array[start] + array[end] < k) {
                    start++;
                }
                else {
                    end--;
                }
            }
            //  return "-1 -1";
        }
        var x = twoSum(arr, k);
        if (x == undefined) {
            console.log("-1 -1");
        }
        else {
            console.log(x);
        }
    }




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