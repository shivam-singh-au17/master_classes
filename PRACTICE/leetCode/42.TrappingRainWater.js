
function trap(height) {

    if (height == null || height.length === 0) {
        return 0;
    } else {

        var res = 0;
        for (var i = 0; i < height.length; i++) {

            var lMax = 0;
            var rMax = 0;
            
            for (var j = 0; j < i; j++) {
                lMax = Math.max(lMax, height[j]);
 
            }
            for (var j = i + 1; j < height.length; j++) {
                rMax = Math.max(rMax, height[j]);
            }

            var water = Math.min(lMax, rMax) - height[i];
            if (water > 0) res += water;
        }
        return res;
    }

}

var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var ans = trap(height);
console.log('ans:', ans)


