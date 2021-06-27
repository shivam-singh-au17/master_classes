
var obj = {
    name: "Shivam Singh",
    year: 1998,
    printAge: function () {
        console.log(this.name + " age is " + (2021 - this.year));

    }
}
obj.printAge();
