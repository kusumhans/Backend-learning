// create one to many( for millions and billions ) relationship ex example user post one uses create multiple post https://mongoosejs.com/docs/populate.html
const mongoose = require('mongoose');
const { Schema } = mongoose;


main()
.then((res) => console.log(res))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Relationship');
}

const userSchema = new Schema({
    name: String,
    email: String
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ]
})

const user = mongoose.model("user", userSchema);
const post = mongoose.model("post", postSchema);

const addData = async() => {
    let user1 = await new user({
        name: "kusum",
        email: "kusum@gmail.com",
    })
    // this  is our first post 
    // let post1 = await new post({
    //     content: "hello kusum",
    //     likes: 7,
    // })
    // post1.user = user1;

    // await user1.save();
    // await post1.save();

    // this is our second post 
    let post2 = await new post({
            content: "bye kusum",
            likes: 27,
        })
        post2.user = user1;
    
        await user1.save();
        await post2.save();
}


addData();