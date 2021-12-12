const fs = require("fs");
const express = require("express");
const Gallery = require("../model/gallery.model");
const router = express.Router();

const galleryUplode = require("../utils/gallery-uplode")


router.post("/", galleryUplode.array("galleryimageurl"), async (req, res) => {
    const files = req.files.map((file) => file.path);
    try {
        const gallery = await Gallery.create({
            picture: files,
            user_id: req.body.user_id,
        })
        return res.status(201).json({ data: gallery })
    } catch (err) {
        filePaths.map((path) => fs.unlinkSync(path));
        return res.status(500).send(err.message);
    }
})


module.exports = router;

