
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());


// FIRST WE NEED TO CONNECT MONGODB DATABASES IN EXPRESS
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/Relationships", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}

// DEFIND BOOK SCHEMAA
const bookSchema = new mongoose.Schema({
    book_title: { type: String, required: true },
    book_body: { type: String, required: true },
    authId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true,
    }]
}, {
    versionKey: false,
    timestamps: true
});

const Book = mongoose.model("book", bookSchema);



// SECTION SCHEMA AND MODAL
const sectionSchema = new mongoose.Schema({
    section_name: { type: String, required: true },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

const Section = mongoose.model("section", sectionSchema);



// AUTHOR SCHEMA AND MODAL
const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

const Author = mongoose.model("author", authorSchema);



// CheckedOut SCHEMA AND MODAL
const checkedOutSchema = new mongoose.Schema({
    ckoB_name: { type: String, required: true },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

const CheckedOut = mongoose.model("checkedOut", checkedOutSchema);

// ---------------------- CRUD OPERATIONS FOR BOOKS -------------------------------


app.post("/books", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book)
    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/books", async (req, res) => {
    try {
        const book = await Book.find().populate("authId").lean().exec();
        return res.status(200).send(book);
    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).lean().exec();
        return res.status(200).send(book);
    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.patch("/books/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(book);
    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/books/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        return res.status(205).send(book);
    } catch (err) {
        return res.status(400).send(err.message)
    }
});



// ---------------------- CRUD OPERATIONS FOR SECTION -------------------------------


app.post("/sections", async function (req, res) {
    try {
        const section = await Section.create(req.body)
        return res.status(201).send(section)

    } catch (err) {
        return res.status(400).send(err.message)
    }

})


app.get("/sections", async (req, res) => {
    try {
        const section = await Section.find().populate("bookId").lean().exec();
        return res.status(200).send(section);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/sections/:id", async (req, res) => {
    try {
        const section = await Section.findById(req.params.id).lean().exec();
        return res.status(200).send(section);

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.patch("/sections/:id", async (req, res) => {
    try {
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(section);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/sections/:id", async (req, res) => {
    try {
        const section = await Section.findByIdAndDelete(req.params.id);
        return res.status(205).json({ post: section });

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


// ---------------------- CRUD OPERATIONS FOR AUTHOR -------------------------------



app.post("/authors", async function (req, res) {
    try {
        const author = await Author.create(req.body)
        return res.status(201).send(author)

    } catch (err) {
        return res.status(400).send(err.message)
    }

})


app.get("/authors", async (req, res) => {
    try {
        const author = await Author.find().lean().exec();
        return res.status(200).send(author);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/authors/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).lean().exec();
        return res.status(200).send(author);

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.patch("/authors/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(author);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/authors/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        return res.status(205).json({ author: author });

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.get("/authors/:id/books", async function (req, res) {
    const userBook = await Book.find({ bookId: req.params.id }).lean().exec()
    const author = await Author.findById(req.params.id)
    return res.status(200).json({ books: userBook, author: author })
})



// ---------------------- CRUD OPERATIONS FOR CheckedOut -------------------------------




app.post("/checkedOuts", async function (req, res) {
    try {
        const checkedOut = await CheckedOut.create(req.body)
        return res.status(201).send(checkedOut)

    } catch (err) {
        return res.status(400).send(err.message)
    }

})


app.get("/checkedOuts", async (req, res) => {
    try {
        const checkedOut = await CheckedOut.find().populate("bookId").lean().exec();
        return res.status(200).send(checkedOut);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/checkedOuts/:id", async (req, res) => {
    try {
        const checkedOut = await CheckedOut.findById(req.params.id).lean().exec();
        return res.status(200).send(checkedOut);

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.patch("/checkedOuts/:id", async (req, res) => {
    try {
        const checkedOut = await CheckedOut.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(checkedOut);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/checkedOuts/:id", async (req, res) => {
    try {
        const checkedOut = await CheckedOut.findByIdAndDelete(req.params.id);
        return res.status(205).json({ checkedOut: checkedOut });

    } catch (err) {
        return res.status(400).send(err.message)
    }

});




app.listen(3003, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 3003");
})


