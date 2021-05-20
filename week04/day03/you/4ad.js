function findAnagram(str1, str2) {

    let mappedstr1 = {}, mappedstr2 = {};

    for (let item of str1) {
        mappedstr1[item] = (mappedstr1[item] || 0) + 1;
    }

    for (let item2 of str2) {
        mappedstr2[item2] = (mappedstr2[item2] || 0) + 1;
    }

    for (let key in mappedstr1) {
        if (!mappedstr2[key]) {
            return 'False';
        }

        if (mappedstr1[key] !== mappedstr2[key]) {
            return 'False';
        }
    }

    return 'True';
}


function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[0];
    var newInput2 = newInput[1];

    var strResult = findAnagram(newInput1, newInput2);
    console.log(strResult);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`anagram
nag a ram`);
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