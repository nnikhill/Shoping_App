// routes/coupon.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { couponCode } = req.body;

  // Validate the coupon code (this is just an example)
  if (couponCode === 'DISCOUNT10') {
    res.send({ success: true, discount: 10.00 });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
