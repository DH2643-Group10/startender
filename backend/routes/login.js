const router = require("express").Router();
var User = require("../models/user.models.js");
const bcrypt = require("bcrypt"); //used for hash and salting passwords
const { createTokens, authenticateToken, } = require("../JWT.js");

const posts = [
  {
    username: 'Albin1337',
    title: 'Albin Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]


//Login check
//localhost:4000/login/
router.route("/").post(async (req, res) => {
  const { username, password } = req.body;
  
  var user = await User.find({ username: username });

  //user is returned in an array => extract the user object
  console.log("user:",user)

  user = user[0];
  console.log("user:",user)

  if (!user) res.status(400).json({ error: "User Doesn't Exist" });

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(400).json({ error: "Wrong Username and Password Combination!" });
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
