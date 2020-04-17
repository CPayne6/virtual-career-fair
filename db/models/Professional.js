const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfessionalSchema = new Schema({
  name: {
    title: String,
    first:{
      type: String,
      required: true
    },
    last:{
      type: String,
      required: true
    },
  },
  social: {
    linkedin: String
  },
  phone:{
    primary: String,
    secondary: String
  },
  email: {
    type: String,
    requied: true,
    unique: true,
  },
  resume: String,
  image: String,
  position: String,
  desc: String,
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    city: String,
    province: String,
    mapURI: String,
  },
  refreshTokens: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("professional_accounts", ProfessionalSchema);