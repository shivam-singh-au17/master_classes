var ageCount = {

    name: "Ironman",
    year_of_birth: 1974,
    printAge: function () {
        console.log(this.name + " age is " + (2021 - this.year_of_birth));
    }

}

ageCount.printAge()

