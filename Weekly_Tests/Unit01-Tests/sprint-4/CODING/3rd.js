

var triangleObj = {

    side1: 4,
    side2: 6,

    hypotenuse: function () {
        return ((this.side1**2 + this.side2**2) ** (1/2))
    }
}

var result = triangleObj.hypotenuse()
console.log(result);

