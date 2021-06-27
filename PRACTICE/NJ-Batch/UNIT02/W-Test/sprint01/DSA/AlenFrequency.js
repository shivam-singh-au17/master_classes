
function AlenFrequency(str, len) {

    var obj = {};
    for (var i = 0; i < len; i++) {
        var key = str[i];
        if (obj[key] == undefined) {
            obj[key] = 1
        } else {
            var prev_count = obj[key];
            obj[key] = prev_count + 1
        }
    }
    var myStr = []
    for (key in obj) {
        myStr.push(key)
    }
    var sortStr = myStr.sort()
    for (var i = 0; i < sortStr.length; i++){
        for (key in obj) {
            if (sortStr[i] == key) {
                console.log(key + "-" + obj[key]);
            }
        }
    }
}


function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);
    var str = input[1];

    AlenFrequency(str, len);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
mnaa`);
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
