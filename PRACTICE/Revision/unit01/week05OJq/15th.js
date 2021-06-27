

var obj = {
    length: 5,
    breath: 10,
    area: function () {
        return this.length * this.breath
    },
    perimeter: function () {
        return 2 * (this.length + this.breath)
    }
}

var area = obj.area()
console.log(area);

var perimeter = obj.perimeter()
console.log(perimeter);