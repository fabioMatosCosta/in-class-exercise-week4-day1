const express = require("express");
const app = express();
const hbs = require("hbs");
const studentsData = require("./students.json");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



app.get("/", (req, res)=>{
    res.render("home");
})


app.get("/students", (req, res)=>{
    res.render("students", {studentName: studentsData});
})

app.get("/about", (req, res)=>{
    res.render("about");
})


app.listen(3000, ()=>{
    console.log("listening on port", 3000);
})