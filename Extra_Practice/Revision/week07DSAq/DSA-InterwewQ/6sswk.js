
function findAllSubStr(str, m) {
  
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var allStr = "";
        for (var j = i; j < str.length; j++) {
            allStr += (str[j]);
            if (allStr[0] == m) {
                count++;
            }
        } 
    }
    return count;
   
}

function runProgram(input) {

    var data = input.split("\n");
    var testCases = Number(data[0]);

    for (var i = 1; i <= testCases; i++) {

        var myStr = data[i * 2 + i - 1];
        var k = data[i * 2 + i];
        var ans = findAllSubStr(myStr, k);
        console.log(ans);
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
4
aman
a
2
ww
w`);
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