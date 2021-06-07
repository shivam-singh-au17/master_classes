
var mark = {
    data: [["Nrupul", 10], ["Prateek", 20], ["Aman", 30], ["Albert", 5], ["Yogesh", 15]],

    average: function () {
        var sumMarks = 0;
        for (var i = 0; i < this.data.length; i++){
            sumMarks += this.data[i][1]
        }
        var aver = sumMarks / this.data.length
        return aver
    },

    minimum: function () {
        var min = this.data[0][1];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][1] < min) {
                min = this.data[i][1]
            }
        }
        return min
    },

    maximum: function () {
        var max = this.data[0][1];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][1] > max) {
                max = this.data[i][1]
            }
        }
        return max
    }

}


var ave = mark.average();
console.log(ave);

var minm = mark.minimum();
console.log(minm);

var maxm = mark.maximum();
console.log(maxm);






// 2nd mathod


var A_boy = {
    name: "Shivam",
    mrkList: [
        { subject: "English", marks: 101 },
        { subject: "Science", marks: 70 },
        { subject: "Math", marks: 85 },
        { subject: "Hindi", marks: 90 },
    ],
    addMarks: function (B_nam, B_mrk) {
        var mark = { sub: B_nam, mks: B_mrk };
        this.mrkList.push(mark);
    },
    leastMarks: function () {
        var least = {};
        for (var i = 0; i < this.mrkList.length; i++) {
            if (least.mks == undefined || this.mrkList[i].mks < least.mks) {
                least = this.mrkList[i];
            }
        }
        return least;
    },
    highMarks: function () {
        var hig = this.mrkList[0];
        for (var i = 0; i < this.mrkList.length; i++) {
            var curr_sub = this.mrkList[i];
            if (curr_sub.mrkList > hig.mrkList) {
                hig = curr_sub;
            }
        }
        return hig
    },

    total: function () {
        var sum = 0;
        for (var i = 0; i < this.mrkList.length; i++) {
            var sum = this.mrkList[i];
            return sum
        }
    }
}
A_boy.total();

A_boy.addMarks("Art", 45);
console.log(A_boy.mrkList);
console.log(A_boy.leastMarks());
console.log(A_boy.highMarks());