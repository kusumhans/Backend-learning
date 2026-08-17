const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./model/chat.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then((res) => {console.log(res)})
.catch(err => console.log(err));

const chat1 = new Chat({
    from: "manish",
    to: "lokesh",
    msg: "hello me gher pr hu tu bhi aja",
    created_at: new Date(),
})
chat1.save()
.then((res) => {console.log(res)})
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("hello all");
})

app.listen( 8080, (req, res) => {
    console.log('Server is running on http://localhost:3000')
})