
var input = "2020 Monday";

var split = input.trim().split(" ");
var first_day = split[1];
var year = split[0];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var calender = {};

for (var i = 0; i < months.length; i++) {
    calender[months[i]] = {};
    for (var j = 0; j < days.length; j++) {
        calender[months[i]][days[j]] = []
    }
}

var day_mapper = {

    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

var day_recever_mapper = {

    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
}


for (months in calender) {
    var days31 = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    var day30 = ['April', 'June', 'September', 'November',];
    var day28 = ["February"];


    var first_day_map = day_recever_mapper[first_day]
    if (days31.includes(months)) {
        for (var i = 1, j = first_day_map; i <= 31; i++, j++) {
            j = j % 7;
            var day_back = day_mapper[j];
            var prev = calender[months][day_back];
            prev.push(i);
            calender[months][day_back] = prev;
            if (i == 31) {
                first_day = day_mapper[(j + 1) % 7]
            }

        }

    }
    else if (day30.includes(months)) {
        for (var i = 1, j = first_day_map; i <= 30; i++, j++) {
            j = j % 7;
            var day_back = day_mapper[j];
            var prev = calender[months][day_back];
            prev.push(i);
            calender[months][day_back] = prev;
            if (i == 30) {
                first_day = day_mapper[(j + 1) % 7]
            }
        }

    } else {
        for (var i = 1, j = first_day_map; i <= 28; i++, j++) {
            j = j % 7;
            var day_back = day_mapper[j];
            var prev = calender[months][day_back];
            prev.push(i);
            calender[months][day_back] = prev;
            if (i == 28) {
                first_day = day_mapper[(j + 1) % 7]
            }
        }

    }

}
console.log(calender);
