const express = require("express")
const Path = require("path");
const { use } = require("react");
const app = express();

let port = 3000;
app.listen(port, (req, res) => {
    console.log(`start server listening to the port of ${port} `);
})

app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "views"))// it is used to server from outside the directory it cannot give error.
app.set(express.static(Path.join(__dirname, "public")))
// ejs files 
app.get("/", (req, res) => {
    res.render("html.ejs");
})
//now how to pass data in ejs  to generate a random number pass a second argument in the for of an argument {num: randomNum}

app.get("/rolldice", (req, res) => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num: randomNum});
})
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instData = require("./data.json");
    const data = instData[username];
    if (data) {
        res.render("instagram.ejs", { data });
        //    console.log(instData )
    }else{
        res.render("error.ejs");
    }
    })
