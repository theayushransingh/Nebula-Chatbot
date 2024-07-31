const moonoogse = require('mongoose');
const { Schema } = moonoogse
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
})


const userModel = moonoogse.model('user', userSchema);

module.exports = userModel;