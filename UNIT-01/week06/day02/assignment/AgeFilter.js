
var data = {

    nameAge: [],
    addAge: function (name, age) {
        this.nameAge.push({ Name: name, Age: age });
    },

    age30Plus: function () {
        var moreThan30 = this.nameAge.filter(function (age) {
            if (age.Age >= 30) {
                return age.Age
            }
        })
        return moreThan30;
    }

}

data.addAge("Nrupul", 32);
data.addAge("Prateek", 30);
data.addAge("Aman", 26);
data.addAge("Ankur", 34);
data.addAge("Albert", 28);
data.addAge("Yogesh", 44);
data.addAge("Sidharth", 22);

console.log(data.nameAge);
console.log(data.age30Plus());


