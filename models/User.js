const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'OTHERS'
    },
    phoneNo: {
        type: Number,
    },
    homeAddress: {
        type: String,
    },
    officeAddress: {
        type: String,
    },
    gender: {
        type: String,
    },
    occupation: {
        type: String,
    },
    institution: {
        type: String,
    },
    department: {
        type: String,
    },
    schoolID: {
        type: String,
    },
    level: {
        type: String,
    },
    subStatus: {
        type: String,
        default: 'OFF'
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('users', UserSchema);