const express = require("express");
const app = express();;
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
var methodOverride = require('method-override')


app.use(express.urlencoded({extended: true}));//express understand client side data thats why we write this line
app.use(methodOverride('_method'))//override use for html using method patch put delete

app.set("view engine", "ejs");//to link views file
app.set("views", path.join(__dirname, "views"));//to link css file

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "kusum",
        content: "this is my first post"
    },
     {
        id: uuidv4(),
        username: "manish",
        content: "this is my first post"
    }, {
        id: uuidv4(),
        username: "lokesh",
        content: "this is my first post"
    }

]

app.listen(port, (req, res) => {
    console.log("server start listening");
})
app.get("/", (req, res) => {
  console.log("starting server")
  res.send("serve is start")
})
app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts })
})
app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
})
app.post("/posts", (req, res) => {
   let { username, content } = req.body;
   let id = uuidv4();
   posts.push({ id, username, content });
   res.redirect("/posts")
})
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
    
})
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent  =  req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content  = newContent;
    // console.log(post);
        res.redirect("/posts")
});
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter(post => post.id !== id);
    res.redirect("/posts");
 });
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post })

})