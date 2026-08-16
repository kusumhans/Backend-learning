const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
main().then((res) => {
    console.log("connection sucessfully ");
})

const bookSchema = new Schema({
    title: {
        type: String,
        required: true //these are schema type options required, default, select, validate, get, set, immutable
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
})

const Book = mongoose.model("book", bookSchema );

const book1 = new Book({
    title: "Mathmatics 12th",
    author: "RD Sharma",
    price: 2000,
})
book1.save()
.then((res) => { console.log(res) })
.catch(err => console.log(err));

Book.find()
.then((res) => {console.log(res)})
.catch(err => {console.log(err)});
Book.findOne({name: "kusum"})
.then((res) => {console.log(res)})
.catch(err => {console.log(err)});

// here use update validator in schema 
// 1. updateOne();
// 1. updateMany();
// 1. FindByIdAndUpdate ();