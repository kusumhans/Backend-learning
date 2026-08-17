const mongoose = require("mongoose");
const Chat = require("./model/chat.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
.then((res) => {console.log(res)})
.catch(err => console.log(err));

const AllChats = [
    {
        from: "manish",
        to: "lokesh",
        msg: "hello me gher pr hu tu bhi aja",
        created_at: new Date(),
    },
    {
        from: "lokesh",
        to: "manish",
        msg: "thik hai",
        created_at: new Date(),
    },
    {
        from: "kusum",
        to: "komal",
        msg: "hello me gher pr hu tu bhi aja",
        created_at: new Date(),
    },
];
Chat.insertMany(AllChats);

// init.js is a inisilization file to insert sample data it is run one time 
