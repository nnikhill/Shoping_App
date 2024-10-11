// routes/billing.js
const express = require('express');
const Billing = require('../models/Billing');
const router = express.Router();

// Endpoint to handle form submission
router.post('/', async (req, res) => {
  try {
    const billingData = new Billing(req.body);
    await billingData.save();
    res.status(201).send({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to submit form', details: error });
  }
});

module.exports = router;
