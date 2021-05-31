
// print key and value 

var product = {
    name: "Shivam Plus 6",
    price: 23222,
    color: "red",
    category: "Mobaile",
    screen: "7.4 inch"
}

for (key in product) {
    // console.log(key + " => " + product[key]);
}



// print single and twice char 


var items = ['a', 'f', 'e', 'a', 'c', 'q', 'f','e', 'a'];
var items_obj = {}

for (var i = 0; i < items.length; i++) {
    var key = items[i];
    if (items_obj[key] == undefined) {
        items_obj[key] = 1;
    } else {
        var prev_count = items_obj[key];
        items_obj[key] = prev_count + 1;
    }
    // console.log(items_obj);
}

var singleChar = []
var twiseChar = []
for (key in items_obj) {
    if (items_obj[key] >= 2) {
        singleChar.push(key)
    } else {
        twiseChar.push(key)
    }
}
// console.log(singleChar)
// console.log(twiseChar)



// print city , state, pin 

var user = {
    name: "Shivam",
    addresses: [
        { city: " MZJP", pin: "281301", state: "UUP" },
        { city: " MZEP", pin: "291301", state: "UJP" },
        { city: " MZRP", pin: "241301", state: "JHUP" },
        { city: " MZTP", pin: "211301", state: "UHP" },
    ]
}

for (var i = 0; i < user.addresses.length; i++) {
    var adr = user.addresses[i];
    // console.log(user.name + " pin name =>" + adr.pin);
    // console.log(user.name + " state name =>" + adr.state);
    // console.log(user.name + " city name =>" + adr.city);
    // console.log();
}





// print parimeter 

var square = {
    side: 3,
    parimeter: function () {
        return this.side * 4
    },
    area: function () {
        return this.side * this.side;
    }
}
// console.log(square.parimeter())
// console.log(square.area())




var student = {
    name: "Shivam",
    marksList: [
        { sub: "Eng", mks: 10 },
        { sub: "Sci", mks: 5 },
    ],
    addMarks: function (s, m) {
        var item = { sub: s, mks: m };
        this.marksList.push(item);
    },
    leastMarks: function () {
        var least = {};
        for (var i = 0; i < this.marksList.length; i++) {
            if (least.mks == undefined || this.marksList[i].mks < least.mks) {
                least = this.marksList[i];
            }
        }
        return least;
    }
}
console.log(student.leastMarks());
student.addMarks("Math", 1);
console.log(student.marksList);
