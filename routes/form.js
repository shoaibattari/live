const express = require("express");
const req = require("express/lib/request");
const path = require("path");
// const fs = require("fs")
const router = express.Router();

router.post("/", (req, res, next) => {
    // res.send(req.url + "check")
    res.send(req.body)
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../","views", "form.html"));
})

// router.use("/submit", (req, res) => {
//     res.write("data submit")
// })

module.exports = router;