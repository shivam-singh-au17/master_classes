var marks = {
    data: [
        ["Nrupul", 10], ["Prateek", 20], ["Aman", 30], ["Albert", 5], ["Yogesh", 15]
    ],
    average: function () {
        sum = 0;
        for (var i = 0; i < this.data.length; i++){
            sum += this.data[i][1];
        }
        var avg = sum / this.data.length
        return avg;
   
    },
    minimum: function () {
        min = this.data[0][1];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][1] < min) {
                min = this.data[i][1]
                var minStudentMarks = [this.data[i][0], this.data[i][1]]
            }
        }
        return minStudentMarks;

    },
    maximum: function () {
        max = this.data[0][1];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][1] > max) {
                max = this.data[i][1]
                var maxStudentMarks = [this.data[i][0], this.data[i][1]]
            }
        }
        return maxStudentMarks;
    }
}

var averageMarks = marks.average();
console.log(averageMarks);

var minimumMarks = marks.minimum();
console.log(minimumMarks);

var maximumMarks = marks.maximum();
console.log(maximumMarks);
