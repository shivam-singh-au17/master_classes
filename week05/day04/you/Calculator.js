var calc = {
    A: 10,
    B: 5,
    addition: function () {
        return this.A + this.B;
    },
    subtraction: function () {
        return this.A - this.B;
    },
    division: function () {
        return this.A * this.B;
    },
    multiplication: function () {
        return this.A / this.B;
    }
}

var add = calc.addition();
console.log("addition is: " + add);

var diff = calc.subtraction();
console.log("subtraction is: " + diff);

var div = calc.division();
console.log("division is: " + div);

var multi = calc.multiplication();
console.log("multiplication is: " + multi);

