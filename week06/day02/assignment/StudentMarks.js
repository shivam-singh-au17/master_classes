
var obj = {
    stuGrMark: [
        {
            grade: "V",
            students: [
                { name: "Nrupul", marks: [10, 20, 30] },
                { name: "Prateek", marks: [20, 30, 40] }
            ]
        },
        {
            grade: "VI",
            students: [
                { name: "Aman", marks: [10, 20, 30] },
                { name: "Albert", marks: [20, 30, 40] }
            ]
        },
        {
            grade: "VII",
            students: [
                { name: "Yogesh", marks: [10, 20, 30] },
                { name: "Sandhya", marks: [20, 30, 40] }
            ]
        }
    ],
    highestScore: function () {
      
        for (var i = 0; i < this.stuGrMark.length; i++) {
            
            var ans1 = findSum(this.stuGrMark[i].students[0].marks)
            var ans2 = findSum(this.stuGrMark[i].students[1].marks)


            if (ans1 > ans2) {
                console.log(this.stuGrMark[i].grade + "-" + this.stuGrMark[i].students[0].name + "-" + ans1);
            } else {
                console.log(this.stuGrMark[i].grade + "-" + this.stuGrMark[i].students[1].name + "-" + ans2);
            }
        }
    }
}

function findSum(arr) {
    var arrSum = 0;
    for (var i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum;
}

obj.highestScore();




