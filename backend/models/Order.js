// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  subtotal: Number,
  total: Number,
  paymentMethod: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
