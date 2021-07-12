

function MasaiUniqueness(str) {

    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var key = str[i];
        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            var prev = obj[key];
            obj[key] = prev + 1;
        }
    }
 
    var temp = true;
    for (key in obj) {
        if (obj[key] == 2) {
            temp = false;
            break;
        }
    }

    if (temp == true) {
        return "Yes"
    } else {
        return "No"
    }
}


function runProgram(input) {

   var ans = MasaiUniqueness(input)
   console.log(ans)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`masi`);
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