const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email ID")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10
    },
    messsage: {
        type: String,
        required: false,
        minLength: 3
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//We Need A Collection
const User = mongoose.model("User", userSchema);

module.exports = User;