const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const Chat = require("./model/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, "public")));    
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then((res) => {console.log(res)})
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("hello all");
})
// add new chat

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
// edit 
app.get("/chats/:id/edit", async(req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})
// update
app.put("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { msg: newMsg } = req.body;

    let updateChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updateChat);
    res.redirect("/chats");
});
// delete chat
app.delete("/chats/:id", async(req, res) => {
    let { id } =  req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats")
})

app.listen( 8080, (req, res) => {
    console.log('Server is running on http://localhost:3000')
})