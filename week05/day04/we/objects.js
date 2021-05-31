
// Create a user object with some keys print all the keys along with their values
// Given an array find the unique items
// Create a user object with array of address objects print all the city names of the addresses
// Create a square object with a method to calculate the area of the square





// var student = {
//     name: 'Shivam Singh',
//     age: 23,
//     gender: 'male',
//     hobby: ['play cricket', 'watching movi', 'travling'],
//     pincode: 231301,
//     priunt: function () {
//         console.log();
//     }

// }

// console.log(student);

// console.log(student.name);
// console.log(student.gender);
// console.log(student.hobby);
// console.log(student.hobby[1]);

// delete student.pincode

// console.log(student);

// student["pincode"] = 231301
// console.log(student);





// var marks = [23, 55, 44, 88];
// var user_marks = [['A', 23], ['B', 55], ['C', 44], ['D', 88]];



// var items = ["A", "B", "C", "D", "A", "B", "E"];
// var data = {};

// for (var i = 0; i < items.length; i++) {
//     data[items[i]] = true;
// }
// console.log(Object.keys(data));


// for (var i = 0; i < items.length; i++) {
//     if (data[items[i]] == undefined) {
//         data[items[i]] = 1;
//     } else {
//         var prev = data[items[i]];
//         data[items[i]] = prev + 1
//     }
// }

// for (k in data) {
//     console.log(k + "-> " + data[k]);
// }
// console.log(Object.keys(data));


// var strore = ""
// for (k in data) {
//     strore += k + data[k]
// }
// console.log(strore);


// var data = {
//     name: "shivam",
//     addr: [
//         { city: "mzp", state: "up" },
//         { city: "blr", state: "mp" },
//         { city: "rkt", state: "ka" }
//     ]
// }

// for (var i = 0; i < data.addr.length; i++) {
// console.log(data.addr[i].city);
// }





var square = {
    side: 4,
    area: function () {
        console.log("area is " + this.side * this.side);
    },
    perimiter: function () {
        return this.side * 4
    }
}


square.area()
square.side = 5;
square.area()
console.log("perimiter is " + square.perimiter());



