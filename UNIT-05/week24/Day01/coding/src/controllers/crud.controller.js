
const model = require("mongoose")

const sendMail = require("../utils/sendMail")

const admin = [
    {
        "first_name": "Shivam",
        "last_name": "Singh",
        "email": "shivamsingh4458@gmail.com",
        "gender": "male",
        "age": 23,
    },
    {
        "first_name": "Saurabh",
        "last_name": "Singh",
        "email": "saurabhsingh4458@gmail.com",
        "gender": "male",
        "age": 22,
    },
    {
        "first_name": "Kamal",
        "last_name": "Prasad",
        "email": "kamalprasad@gmail.com",
        "gender": "male",
        "age": 20,
    },
    {
        "first_name": "Murali",
        "last_name": "Prasad",
        "email": "muraliprasad@gmail.com",
        "gender": "male",
        "age": 30,
    },
    {
        "first_name": "Ram Ji",
        "last_name": "Prasad",
        "email": "ramjiprasad@gmail.com",
        "gender": "male",
        "age": 33,
    }
]

const post = (model) => async (req, res) => {
    try {

        const item = await model.create(req.body)
        sendMail({
            to: item.email,
            subject: "Verification Email",
            text: `This is ${item.first_name} ${item.last_name} From Masai School`,
            html: `<h1>Hi ${item.first_name} conferm your email</h1>`,
        })
        admin.map((oneAdmin) => {
            sendMail({
                to: oneAdmin.email,
                subject: `${oneAdmin.first_name} ${oneAdmin.last_name} has registered with Masai School`,
                text: `Please welcome ${oneAdmin.first_name} ${oneAdmin.last_name}`,
            })
        })
        return res.status(201).send(item)

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const get = (model) => async (req, res) => {
    try {

        const page = +req.query.page || 1;
        const size = +req.query.size || 10;

        const offset = (page - 1) * size;

        const item = await model.find().skip(offset).limit(size).lean().exec();

        const totalPages = Math.ceil((await model.find().countDocuments()))
        return res.status(200).send({ item: item, totalPages });

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item);

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const patchOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(item);

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const deleteOne = (model, itemName) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id);
        return res.status(205).json({ [itemName]: item });

    } catch (err) {
        return res.status(400).send(err.message)
    }
}


module.exports = (model, itemName) => ({
    post: post(model),
    get: get(model),
    getOne: getOne(model),
    patchOne: patchOne(model),
    deleteOne: deleteOne(model, itemName)
})

