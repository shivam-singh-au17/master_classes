var arrayFilter = {

    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function (num) {
        var min = []
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] < num) {
                min.push(this.data[i]);
            }
        }
        return min;
    },
    greaterThanItems: function (num) {
        var max = []
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] > num) {
                max.push(this.data[i]);
            }
        }
        return max;
    }

}

var lessItems = arrayFilter.lessThanItems(4);
console.log(lessItems);

var greaterItems = arrayFilter.greaterThanItems(6);
console.log(greaterItems);


