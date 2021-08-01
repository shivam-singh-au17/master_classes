
function removeInMasterQueue(clubNum, queue, club_1, club_2, club_3, club_4) {

    if (clubNum[0] == 1) {
        if (club_1.length > 0) {
            queue[0] = club_1[0];
            club_1.shift();
        } else {
            queue.shift()
        }
    } else if (clubNum[0] == 2) {
        if (club_2.length > 0) {
            queue[0] = club_2[0];
            club_2.shift();
        } else {
            queue.shift();
        }
    } else if (clubNum[0] == 3) {
        if (club_3.length > 0) {
            queue[0] = club_3[0];
            club_3.shift();
        } else {
            queue.shift()
        }
    } else if (clubNum[0] == 4) {
        if (club_4.length > 0) {
            queue[0] = club_4[0];
            club_4.shift();
        } else {
            queue.shift();
        }
    }

}


function appendInMasterQueue(stu, queue, club_1, club_2, club_3, club_4) {

    for (let i = 0; i < queue.length; i++) {
        if (queue[i][0] == stu[0]) {
            if (stu[0] == '1') club_1.push(stu)
            else if (stu[0] == '2') club_2.push(stu);
            else if (stu[0] == '3') club_3.push(stu);
            else club_4.push(stu);
            return;
        }
    }
    queue.push(stu)
}

function runProgram(input) {

    let Input = input.split('\n');
    let testCases = Number(Input[0]);

    let queue = [];
    let club_1 = [];
    let club_2 = [];
    let club_3 = [];
    let club_4 = [];

    for (let i = 1; i <= testCases; i++) {

        let O_Arr = Input[i].trim().split(' ');
        
        if (O_Arr[0] == 'E') {
            appendInMasterQueue([O_Arr[1], O_Arr[2]], queue, club_1, club_2, club_3, club_4);
        } else {
            console.log(queue[0].join(' '))
            removeInMasterQueue(queue[0], queue, club_1, club_2, club_3, club_4);
        }
    }
};


if (process.env.USERNAME === "shiva") {
    runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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

