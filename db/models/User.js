const mongoose = require("mongoose");
const Schema = mongoose.Schema;


test = {
  social:{
      github: 'https://github.com/CPayne6',
      linkedin: 'https://www.linkedin.com/in/chrisryanpayne/',
      website: 'https://jamesgmcdonald.com'
  },
  phone:{
      primary: '905-999-9995',
      secondary: '905-999-6666'
  },
  email: 'js69@queensu.ca',
  desc: 'Hardworking SIMP',
  resume: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  name:{
      title: 'Mr',
      first: 'John',
      last:'Smith'
  },
  imageURL: 'https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg',
  location: {
    city: 'Ajax',
    province: 'Ontario',
    mapLink: 'https://www.google.com/maps/place/The+Plaza/@44.2314568,-76.486103,16.91z/data=!4m5!3m4!1s0x4cd2aafffee91ae7:0x12dbccded8b696eb!8m2!3d44.232827!4d-76.4855043',
  }
}
const UserSchema = new Schema({
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
    github: String,
    linkedin: String,
    website: String
  },
  phone:{
    primary: String,
    secondary: String
  },
  email: {
    type: String,
    requied: true
  },
  resume: String,
  image: String,
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

module.exports = mongoose.model("user_accounts", UserSchema);