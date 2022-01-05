const express = require("express");
const bodyParser = require("body-parser")
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


// router.get("/reg", (req,res) =>{
//     res.sendFile(path.join(__dirname,"../","views","register.ejs"));
// })
// router.use("/submit", (req, res) => {
//     res.write("data submit")
// })

module.exports = router;