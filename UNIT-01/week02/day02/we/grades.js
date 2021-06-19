// GRADES COMMENT
// create a file named grades.js.On the basis of the grades obtained by the student, comment the student performance using the Switch Cases.
//      A Grade - Excellent
//      B Grade - Very Good
//      C Grade - Good
//      D Grade - Needs a lot of Improvement
//      F Grade - Failed


var grade = "D";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Needs a lot of Improvement");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Check your input");
        break;
}