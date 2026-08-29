// create one to many relationship ex customer order one customer order many orders https://mongoosejs.com/docs/populate.html
const mongoose = require('mongoose');
const { Schema } = mongoose;


main()
.then((res) => console.log(res))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Relationship');
}

const orderSchema = new Schema({
    item: String,
    price: Number,    
});
const customerSchema = new Schema({
    name: String,
    order: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Order"
        },
    ]  
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async() => {
    let customer1 = new Customer({
        name: "kusum",
    })
    let order1 = await Order.findOne({item: 'chips'});
    let order2 = await Order.findOne({item: 'chocolate'});

    customer1.order.push(order1);
    customer1.order.push(order2);

    let result = await customer1.save();
    console.log(result[0]);
}
addCustomer();

const findCustomer = async() => {
  let res = await Customer.findOne({name: "kusum"}).populate("order")//to extand the order details.
  console.log(res)
}
findCustomer();

// const addOrder = async() => {
//     let res = await Order.insertMany([
//         {item: "Samosa", Price: 20},
//         {item: "chips", Price: 10},
//         {item: "chocolate", Price: 40}
//     ]);
//     console.log(res);
// }
// addOrder();