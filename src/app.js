const express = require("express");
const path = require("path");
const hbs = require("hbs");
const Register = require("./models/register")
const { json } = require("express")
require("./db/conn");

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/../templates/partials');

const static_path = path.join(__dirname, "/../public");
app.use(express.static(static_path));
app.use(express.static(static_path));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set('views', path.join(__dirname + '/../templates/views'));




app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server running on --> http://localhost:${port}`)

})

app.get("/login", (req, res) => {
    res.send("<center><h1>Under Development :(</h1></center>");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/blog", (req, res) => {
    res.render("blog");
})

app.post("/register", async (req, res) => {
    try {
        if (req.body.password === req.body.confirmPassword) {
            const data = new Register({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                contactNo: req.body.contactNo,
                age: req.body.age,
                password: req.body.password
            })
            const registered = await data.save();
            res.status(201).render("blog", { name: req.body.firstName });
        } else {
            res.send("Passwords are not matching")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

