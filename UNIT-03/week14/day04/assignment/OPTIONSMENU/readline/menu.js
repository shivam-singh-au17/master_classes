const readline = require("readline");

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.setPrompt("Available Options:  \n\n    1 => Show All Books \n    2 => Add a New Book \n    3 => Quit \n \nEnter Your Choice: ")
userInput.prompt()

let myBooks = ["Pride and Prejudice", "Things Fall Apart", "Great Expectations", "To Kill a Mockingbird"];

userInput.on("line", function (num) {
    console.log("========================================================");
    if (num == 1) {
        for (let i = 0; i < myBooks.length; i++) {
            console.log(`${i + 1}. ${myBooks[i]}`);
        }
        console.log("========================================================");
        userInput.prompt()
    } else if (num == 2) {
        userInput.question("Enter Book Your Name: ", (bookName) => {
            myBooks.push(bookName);
            console.log("Your book has been added successfully.");
            console.log("========================================================");
            userInput.prompt()
        })
        userInput.prompt()
    } else if (num == 3) {
        userInput.question("Are you sure you want to quit - press Y to quit: ", (press) => {
            if (press == 'y' || press == 'Y') {
                console.log("========================================================");
                console.log("Bye Bye!");
                userInput.close();
            } else {
                userInput.prompt()
            }
        })
    } else {
        console.log("You have selected an invalid entry so please press 1, 2 or 3");
        userInput.prompt()
    }
});


