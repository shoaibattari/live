const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const ejs  = require("ejs");
const app = express()
const port = 3000
const formRoutes = require("./routes/form")


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
 

app.use((req, res, next) =>{
    console.log(req.url);
    next();
})

app.use("/form", formRoutes);

app.use('*', (req, res) => {
    res.write('404')
    res.end()
})


app.listen(port, () => {
    console.log(3000)
})