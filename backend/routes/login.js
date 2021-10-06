const router = require("express").Router();
var User = require("../models/user.models.js");
const bcrypt = require("bcrypt") //used for hash and salting passwords
const {createTokens, validateToken} = require("../JWT.js")

//Login check
router.route('/').post( async (req, res) => {
    const { username, password } = req.body;
    var user = await User.find({"username":username})
    
    //user is returned in an array => extract the user object
    user=user[0];
  
    if (!user) res.status(400).json({ error: "User Doesn't Exist" });
    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
      if (!match) {
        res
          .status(400)
          .json({ error: "Wrong Username and Password Combination!" });
      } else {
        const accessToken = createTokens(user);
        console.log("accessToken",accessToken)
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: true,
        });
        // console.log("validateToken",validateToken)
        res.status(200).json(user);
      }
    });
  });
  

// router.route('/').get((req, res) => {
//   User.find().
//     then(users=> res.json(users))
//     .catch(error=>{res.status(400).json(error)})
// })

// //Create new user
// //Todo: fixa unique email och unique username bad request message.
// router.route('/add').post((req, res) => {
//   const newUser = new User({
//     fullName: req.body.fullName,
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   newUser.save()
//   .then((data) => {
//     res.json(data);
//     })
//   .catch((error) => {
//       // console.log("error",error)
//       res.status(400).json(error);
//     });
// });

module.exports = router;
