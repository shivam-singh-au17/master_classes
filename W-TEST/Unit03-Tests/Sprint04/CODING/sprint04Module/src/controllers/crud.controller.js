
const model = require("mongoose");


const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body)
        return res.status(201).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const get = (model) => async (req, res) => {
    try {
        const item = await model.find().populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


//1 get api for all products
const getAll = (model) => async (req, res) => {
    try {
        const item = await model.find().populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}



//2 find all products which are higher than Rs.500
const getHigh5 = (model) => async (req, res) => {
    try {
        const item = await model.find({ prod_Price: { $gt: 500 } }).populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}



//3  find all the products which are available in more than 3 different colours
const getMorethen3Col = (model) => async (req, res) => {
    try {
        const item = await model.find({ colourName: { $in: ["green", "blue", "red", "orange"] } }).populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}




//4 find all the products which have atleast 1 colour that matches.
const getmatch1 = (model) => async (req, res) => {
    try {
        const item = await model.find({ colourName: { $eq: "green" } }).populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}



//5 find the product which has the most colours.
const getmostCol = (model) => async (req, res) => {
    try {
        const item = await model.find({ prod_Name: { $eq: "Shirt" } }).populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}



//6 find the products which can be used by men and women.
const getmandf = (model) => async (req, res) => {
    try {
        const item = await model.find({ prod_Coteg: "Male&Female" }).populate("productId").lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


//7 find the total number of products on the site 
const getAllCount = (model) => async (req, res) => {
    try {
        const item = await model.countDocuments();
        return res.sendStatus(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}



//8 find the colour which has the most products.
const getAllColCount = (model) => async (req, res) => {
    try {
        const item = await model.find({ colourName: { $eq: "red" } }).countDocuments();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}



//9 This is for find one product by id.
const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


// This is for update
const patchOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


// This is for delete
const deleteOne = (model, itemName) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id)
        return res.status(205).json({ [itemName]: item });
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


module.exports = (model, itemName) => ({
    post: post(model),
    get: get(model),
    getAll: getAll(model),
    getAllCount: getAllCount(model),
    getMorethen3Col: getMorethen3Col(model),
    getmostCol: getmostCol(model),
    getAllColCount: getAllColCount(model),
    getmandf: getmandf(model),
    getHigh5: getHigh5(model),
    getmatch1: getmatch1(model),
    getOne: getOne(model),
    patchOne: patchOne(model),
    deleteOne: deleteOne(model, itemName)
})

