// create one to few relationship ex one user multiple addresses.
const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
.then((res) => console.log(res))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Relationship');
}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            _id: false,
            Location: String,
            city: String
        }
    ]
});

const User = mongoose.model('user', userSchema);

const addUser = async() => {
    let user1 = new User({
        username: "kusum",
        addresses: [
            {
                Location: "222 new shine colony",
                city: "palwal"
            }
        ]
    })
    user1.addresses.push({Location: "hariom street", city: "palwal"});
    let result = await user1.save();
    console.log(result);
}
addUser();