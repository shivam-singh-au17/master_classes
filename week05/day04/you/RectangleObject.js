var Rectangle = {

    length: 2,
    breadth: 3,
    area: function () {
        return this.length * this.breadth;
    },
    perimeter: function () {
        return 2 * (this.length + this.breadth);
    }
}

rec_area = Rectangle.area();
console.log("Rectangle area is: " + rec_area);

rec_peri = Rectangle.perimeter();
console.log("Rectangle perimeter is: " + rec_peri);

