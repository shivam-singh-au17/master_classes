// Create a user object with a marks key having an array of subject marks, with a method to add a new subject marks and also methods to calculate the lowest, highest and total marks


var data = {

    name: "Shivam",
    marks: [{ subject: 'History', marks: 100 }],
    addMarks: function (sub, mks) {
        this.marks.push({ subject: sub, marks: mks });
    },

    lowest: function () {
        var mksData = this.marks;
        mksData.sort(function (a, b) {
            return a.marks - b.marks;
        })
        return mksData[0]
    },

    highest: function () {
        var mksData = this.marks;
        mksData.sort(function (a, b) {
            return b.marks - a.marks;
        })
        return mksData[0]
    },

    total: function () {
        var sum = this.marks.reduce(function (ac, el) {
            return ac + el.marks
        }, 0)
        return sum;
    }

}

data.addMarks("Maths", 90);
data.addMarks("English", 80);
data.addMarks("Hindi", 70);
data.addMarks("Science", 60);
console.log(data.marks);
console.log(data.lowest());
console.log(data.highest());
console.log(data.total());