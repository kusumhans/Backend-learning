const mongoose = require("mongoose");   

const chatSchmea = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        minlength: 5,
        maxlength: 500 
    },
    created_at: {
        type: Date,

    },
})

const Chat = mongoose.model("chat", chatSchmea);
module.exports = Chat;