const router = require("express").Router();
let User = require("../models/user.models.js");

//Find user all users
router.route('/').get((req, res) => {
  User.find().
    then(users=> res.json(users))
    .catch(error=>{res.status(400).json(error)})
})

//Create new user
//Todo: fixa unique email och unique username bad request message.
router.route('/add').post((req, res) => {
  const newUser = new User({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save()
  .then((data) => {
    res.json(data);
    })
  .catch((error) => {
      // console.log("error",error)
      res.status(400).json(error);
    });
});

module.exports = router;
