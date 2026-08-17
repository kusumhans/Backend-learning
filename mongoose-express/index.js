const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const Chat = require("./model/chat.js");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, "public")));    
app.use(express.urlencoded({extended: true}));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then((res) => {console.log(res)})
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("hello all");
})

app.get("/chats", async(req,res) => {
let chats = await Chat.find();
res.render("chats.ejs", { chats })
})

app.get("/chats/new", (req, res) => {
    res.render("chatnewform.ejs")
})
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let newchat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    })
 newchat.save()
 .then((res) => console.log("chat was saved"))
 .catch((err) => console.log(err));
 res.redirect("/chats");
})

app.listen( 8080, (req, res) => {
    console.log('Server is running on http://localhost:3000')
})