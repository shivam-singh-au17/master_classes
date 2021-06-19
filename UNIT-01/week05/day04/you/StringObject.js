var StringObject = {

    call: "FireFox",
    vowelsCount: function () {
        var count = 0;
        for (var i = 0; i < this.call.length; i++) {
            if (this.call[i] == 'a' || this.call[i] == 'e' || this.call[i] == 'i' || this.call[i] == 'o' || this.call[i] == 'u' ) {
                count++
            }
        }
        return count;
    },
    reverse: function () {
        var reverseString = "";
        for (var i = this.call.length - 1; i >= 0; i--) {
            reverseString += this.call[i];
        }
        return reverseString;
    },
    changeCase: function () {
        var result = "";
        for (var i = 0; i < this.call.length; i++) {
            if (this.call.charCodeAt(i) > 96) {
                result += String.fromCharCode(this.call.charCodeAt(i) - 32);
            } else if (this.call.charCodeAt(i) < 123) {
                result += String.fromCharCode(this.call.charCodeAt(i) + 32);
            }
        }
        return result;
    }

}

var countOfVowels = StringObject.vowelsCount()
console.log(countOfVowels);


var stringInReverse = StringObject.reverse()
console.log(stringInReverse);

var lowToUpToLow = StringObject.changeCase()
console.log(lowToUpToLow);


