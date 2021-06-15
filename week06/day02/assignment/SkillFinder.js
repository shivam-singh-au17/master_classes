
function skillFinder(input) {

    var skillData = input.trim().split("\n");
    
    var userObj = {};
    for (var i = 0; i < skillData.length; i++) {
        var skills = skillData[i].trim().split(" ");
        var key = skills[0];
        var value = skills[1];
        if (userObj[key] == undefined) {
            userObj[key] = [];
            userObj[key].push(value);
        } else {
            userObj[key].push(value);
        }
    }

    for (key in userObj) {
        if (userObj[key].includes("js")) {
            console.log(key);
        }
    }

}

skillFinder(`Nrupul cmd
Prateek js
Aman ds
Nrupul python
Albert js
Albert react
Aman algo
Prateek html
Nrupul sql`)


