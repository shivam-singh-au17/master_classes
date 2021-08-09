function runProgram(input) {
    var input = input.split("\n");
    var str = input[0].split("");
    function StringCut(str) {
        var x = str.length;
        var m = Math.floor(x / 2);
        var left = 0;
        var right = m - 1;
        while (left < right) {
            let temp = str[left];
            str[left] = str[right]
            str[right] = temp;
            left++
            right--
        }

        if (x % 2 == 0) {
            let left1 = m;
            let right2 = x - 1;
            while (left1 < right2) {
                let temp1 = str[left1];
                str[left1] = str[right2]
                str[right2] = temp1;
                left1++
                right2--
            }
        }
        else {
            let left1 = m + 1;
            let right2 = x - 1;
            while (left1 < right2) {
                var temp1 = str[left1]
                str[left1] = str[right2]
                str[right2] = temp1
                left1++;
                right2--
            }
        }

        return str.join("")
    }
    console.log(StringCut(str));
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