const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

// @route   POST api users
// @desk    register new user
// access   Private 
router.post( '/', [
            check('firstName', 'Please add name').not().isEmpty(),
            check('email', 'Please include a valid email').isEmail(),
    
        ], 
     
    async (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      
      const { 
                email,       password,      category, 
                firstName,   lastName,      phoneNo, 
                homeAddress, officeAddress, gender,
                occupation,  institution,   department,
                schoolID,    level,         subStatus
                            } = req.body;
    try {
        let user = await User.findOne( { email });

        if (user) {
            return res.status(400).json({ msg: 'User already exist'})
        }
          user = new User({
            email,          password,       category, 
            firstName,      lastName,       phoneNo, 
            homeAddress,    officeAddress,  gender,
            occupation,     institution,    department,
            schoolID,       level,          subStatus
          });

          const salt = await bcrypt.genSalt(10);

          user.password = await bcrypt.hash(password, salt);

          await user.save();
  
         // await newClient.save();
          const payload = {
              user: {
                  id: user.id
              } 
          }
  
          jwt.sign(
              payload, 
              config.get('jwtSecret'), {
              expiresIn: 360000
          }, (err, token) => {
              if (err) throw err;
              res.json({ token });
          })
      } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error')  
      }
     }
    );

module.exports = router;