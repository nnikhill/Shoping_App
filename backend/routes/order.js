// routes/order.js
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const orderData = new Order(req.body);
    await orderData.save();
    res.status(201).send({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to place order', details: error });
  }
});

module.exports = router;
