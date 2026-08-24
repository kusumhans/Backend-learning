const express = require("express");
const app = express();

app.use( (req, res) => {
    res.send("middleware");
})

app.get("/", (req, res) => {
    res.send("hello route");
})
app.get("/routing", (req, res) => {
    res.send("hello routing");
})
app.listen(8080, (req, res) => {
    console.log("server start lisning");
})