const express = require('express');
const userAuth = require('../middleware/authentication/user');
const cookie = require('../../../util/authentication/cookies');
const userModel = require('../../../db/models/User');

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.post('/login', (req, res) => {
    let response = require('../../../placeholder/sign-in').user;
    cookie(req.user, res);
    res.send(response); //  Temporary response for test
});

// {
//     social:{
//         github: 'https://github.com/CPayne6',
//         linkedin: 'https://www.linkedin.com/in/chrisryanpayne/',
//         website: 'https://jamesgmcdonald.com'
//     },
//     phone:{
//         primary: '905-999-9995',
//         secondary: '905-999-6666'
//     },
//     email: 'js69@queensu.ca',
//     desc: 'Hardworking SIMP',
//     resume: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
//     name:{
//         title: 'Mr',
//         first: 'John',
//         last:'Smith'
//     },
//     imageURL: 'https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg',
//     location: {
//       city: 'Ajax',
//       province: 'Ontario',
//       mapLink: 'https://www.google.com/maps/place/The+Plaza/@44.2314568,-76.486103,16.91z/data=!4m5!3m4!1s0x4cd2aafffee91ae7:0x12dbccded8b696eb!8m2!3d44.232827!4d-76.4855043',
//     }
//   }

router.post('/signup', async (req, res) => {
    let test = new userModel({
        name: {
            title: 'Mr',
            first: 'TestFirst',
            last: 'TestLast',
          },
          social: {
            github: 'https://github.com/CPayne6',
            linkedin: 'https://www.linkedin.com/in/chrisryanpayne/',
            website: 'https://jamesgmcdonald.com'
          },
          phone:{
            primary: '905-999-9995',
            secondary: '905-999-6666'
          },
          email: 'test@queensu.ca',
          resume: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          image: 'https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg',
          desc: 'Hardworking SIMP',
          password: 'PASSWORDHASH',
          location: {
            city: 'Ajax',
            province: 'Ontario',
            mapURI: 'https://www.google.com/maps/place/The+Plaza/@44.2314568,-76.486103,16.91z/data=!4m5!3m4!1s0x4cd2aafffee91ae7:0x12dbccded8b696eb!8m2!3d44.232827!4d-76.4855043',
          },
          refreshTokens: []
    });
    console.log(test);
    try{
        let doc = await test.save()
        console.log(doc);
        res.send('success'); //  Temporary response for test
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
});

router.post('/logout', () => {
    res.send('logout'); //  Temporary response for test
});

router.use(userAuth);

module.exports = router;

