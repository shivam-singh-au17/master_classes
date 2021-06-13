

var markObj = {

    Nrupul: [30, 40, 50],
    Prateek: [20, 10, 10],
    Yogesh: [40, 20, 20],
    Aman: [10, 20, 40],
    Albert: [25, 15, 25],
    leastMarks: function () {

        for (key in markObj) {
            var minAvSum = 0
            for (var i = 0; i < markObj[key].length; i++){
                minAvSum += (markObj[key][i] / 3)
                
                var minAvgMarks = minAvSum
                minAvgMarks=  Math.min(minAvgMarks, minAvSum)
            }
        }
        console.log(minAvgMarks);
    }
}

markObj.leastMarks()



