// IND vs PAK
// Create a file named indVsPak.js.Now Suppose that India and Pakistan are playing a one - day cricket match.If the final Score of India is greater than Pakistan, then print India Wins, If the final Score of Pakistan is greater than that of India then print Pakistan Wins, else if the scores are equal, then print Match Tied


var scoreIndia = 200;
var scorePakistan = 100;

if (scoreIndia > scorePakistan) {
    console.log("India Wins");
}
else if (scoreIndia < scorePakistan) {
    console.log("Pakistan Wins");
}
else {
    console.log("Match Tied");
}
