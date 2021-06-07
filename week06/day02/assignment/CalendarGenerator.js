
var data = "2020 Monday";

var newInput = data.trim().split(" ");
var first_day = newInput[1];
var year = newInput[0];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var printCalender = {};

for (var i = 0; i < months.length; i++) {
    printCalender[months[i]] = {};
    for (var j = 0; j < days.length; j++) {
        printCalender[months[i]][days[j]] = []
    }
}

var day_finder = {

    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

var day_index_finder = {

    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
}


for (months in printCalender) {
    var days_31 = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    var day_30 = ['April', 'June', 'September', 'November',];
    var day_28 = ["February"];


    var first_day_map = day_index_finder[first_day]
    if (days_31.includes(months)) {
        for (var i = 1, j = first_day_map; i <= 31; i++, j++) {
            j = j % 7;
            var day_back = day_finder[j];
            var prev = printCalender[months][day_back];
            prev.push(i);
            printCalender[months][day_back] = prev;
            if (i == 31) {
                first_day = day_finder[(j + 1) % 7]
            }

        }

    }
    else if (day_30.includes(months)) {
        for (var i = 1, j = first_day_map; i <= 30; i++, j++) {
            j = j % 7;
            var day_back = day_finder[j];
            var prev = printCalender[months][day_back];
            prev.push(i);
            printCalender[months][day_back] = prev;
            if (i == 30) {
                first_day = day_finder[(j + 1) % 7]
            }
        }

    } else {
        for (var i = 1, j = first_day_map; i <= 28; i++, j++) {
            j = j % 7;
            var day_back = day_finder[j];
            var prev = printCalender[months][day_back];
            prev.push(i);
            printCalender[months][day_back] = prev;
            if (i == 28) {
                first_day = day_finder[(j + 1) % 7]
            }
        }

    }

}
console.log(printCalender);
