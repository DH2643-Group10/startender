const router = require("express").Router();
var User = require("../models/user.models.js");
const bcrypt = require("bcrypt"); //used for hash and salting passwords
const { createTokens, authenticateToken, } = require("../JWT.js");
const {checkError} = require('../errorCodes')


//Login check
//localhost:4000/login/
router.route("/").post(async (req, res) => {
  const { username, password } = req.body;
  
  var user = await User.find({ username: username });

  user = user[0];
  console.log("user logging in:",user)
  
  if (!user) res.status(201).json({ errorMessage: "User Doesn't Exist" });

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(202).json({ errorMessage: "Wrong Username or Password!" });
    } else {
      const token = createTokens(user);
      console.log("token", token);
      res.cookie("token", token, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true,
      });
      
      res.status(200);
      
      // res.status(200).json(token)
      res.json({token:token})
    }
  });
});


router.route("/posts").get(authenticateToken, (req, res) => {
  // console.log("POSTS req", req)
  // console.log("POSTS res", res)

  //verify the JWT token generated for the user
  res.json({posts: posts.filter(post => post.username === req.user.username)})
});


module.exports = router;
