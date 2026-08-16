const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then((res) => {
    console.log("connection sucessfully ");
})
.catch(err => console.log(err));
// create connection bwt mongoose and nodejs
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
// create schema 

const schema = new Schema({
    name: String,
    email: String,
    age: Number,
})
// to create collecttion in nodejs model is used
const User = mongoose.model("User", schema);
// const Employee = mongoose.model("Employee", schema);

/*const user1 = new User({
    name: "kusum", 
    email: "kusus@gmail.com", 
    age: 21
});
user1.save().then((res) => {
    console.log(res);
})
.catch(err   => console.log(err));*/

// insert multiple data in db
// User.insertMany([
//     {name: "hans", email: "hans@gmail.com", house:  233},
//     {name: "kush", email: "kush@gmail.com", house:  323},
//     {name: "mann", email: "mann@gmail.com", house:  983},

// ])
User.find({})
.then((res) => {console.log(res)})
.catch(err => console.log(err))