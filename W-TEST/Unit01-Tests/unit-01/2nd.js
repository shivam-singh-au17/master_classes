

function revStr(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; i--){
        res += str[i];
    }
    // console.log(res);
    return res;
}



function oneHalfStr(str) {
    var oneHalf = "";
    for (var i = 0; i < str.length / 2; i++){
        oneHalf += str[i];
    }
    return oneHalf;
}



function sencondHalfStr(str) {
    var secondHalf = "";
    for (var i = str.length / 2; i < str.length; i++){
        secondHalf += str[i];
    }
    return secondHalf;
}


function printResult(oneHalf, secondHalf) {
    if (oneHalf == revStr(oneHalf) && secondHalf == revStr(secondHalf)) {
        return "yes"
    } else {
        return "no"
    }
}

function runProgram(input) {

    var Input = input.split("\n");
    var str = Input[1];

    var firstHalf = oneHalfStr(str);
  
    var secHalf = sencondHalfStr(str);
  
    var ans = printResult(firstHalf, secHalf)

    console.log(ans);
    
}


if (process.env.USERNAME === "shiva") {
    runProgram(`6
ababcb`);
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




