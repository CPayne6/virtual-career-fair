const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        title: String,
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
    },
    social: {
        github: String,
        linkedin: String,
        website: String,
    },
    phone: {
        primary: String,
        secondary: String,
    },
    email: {
        type: String,
        requied: true,
        unique: true,
    },
    resume: String,
    image: String,
    desc: String,
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    location: {
        city: String,
        province: String,
        mapURI: String,
    },
    refreshTokens: [
        {
            _id: false,
            token: String,
            expiryDate: {
                type: Date
            }
        },
    ],
});

module.exports = mongoose.model("user_accounts", UserSchema);
