const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: 'OTHERS'
    },
    phoneNo: {
        type: Number,
    },
    address: {
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
    course: {
        type: String,
    },
    schoolID: {
        type: String,
    },
    subStatus: {
        type: String,
        default: 'OFF'
    },
    addMeOnWhatApp: {
        type: String,
        default: 'YES'
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('users', UserSchema);