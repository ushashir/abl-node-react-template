const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const transporter = require('../config/transporter');

const path = require('path');

// const dotenv = require('dotenv');
// dotenv.config();
// const app = express();

// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.json());
// app.use(express.static(buildPath));

// @route   POST api/transporters
// @desc    Post messages
// access   Public
router.post('/', 
      [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('message', 'Message is required').not().isEmpty()
      ],
async (req, res) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, subject, message} = reg.body;
  try {
    const mailOptions = {
      from: email,
      to: process.env.email,
      subject: subject,
      html: message
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});


