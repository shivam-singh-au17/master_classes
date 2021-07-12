// TODO:



function findTwoEqualStr(arr) {

    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];

        if (obj[key] == undefined) {
            obj[key] = 1;
        } else {
            prev = obj[key];
            obj[key] = prev + 1;
        }
    }
    var temp = true
    for (key in obj) {
        if (obj[key] >= 2) {
            temp = false
            break;
        }
    }
    return temp;
}


function DistinctSubstrings(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var subStr = [];
        for (var j = i; j < str.length; j++) {
            subStr.push(str[j]);

            if (findTwoEqualStr(subStr) == true) {
                count++;
            }
        }
    }
    return count;
}



function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var str = Input[i * 2];

        var ans = DistinctSubstrings(str);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
24
mcoyjrmvuobmhxtivueknmvh
30
yqspeseiidscqqwfrmoriwoebyrpuy
70
wrooyishswcunvtupgkipjwvlxndvoxugmjhwcppbtmopjmipwqhgpdtnsaljxgsmpamur
28
vmrnebamsyfdhuielcewleeeqvhf
44
yirncfufhhxinbpkktvoatceajxvqdrrnjgrqdwakvia
25
alluhcwbhcbqcajfrdvdjnvol
22
ajeckenwbxbybidfyffkmy
65
ieawapivrrctcikbmidljnqopvvaiwqrbrodhybbqfuuohybpcocrfshbpiloydss
95
vcsadlfbhtigwykldeqvmtlwgdxlvrittbtanabwvjftkrfnvymisafbdepyxxvryprorunohsktkrkjqwtmwapbgfcgdxa
29
qstipiywbjroecauytjxvaycfeklc`);
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


