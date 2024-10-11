// routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
    const { fname, lname, email, message } = req.body;

    if (!fname || !lname || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Set email options
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `Contact Form Submission from ${fname} ${lname}`,
            text: `You have a new contact form submission from ${fname} ${lname} (${email}).\n\nMessage:\n${message}`,
        };

        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);

        res.status(200).json({ msg: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Failed to send message', error });
    }
});

module.exports = router;
