const router = require("express").Router();
let User = require("../models/user.models.js");
const bcrypt = require('bcrypt')

//Find user all users
router.route('/').get((req, res) => {
  User.find().
    then(users=> res.json(users))
    .catch(error=>{res.status(400).json(error)})
})

//Create new user
//Todo: fixa unique email och unique username bad request message.
router.route('/add').post((req, res) => {

  bcrypt.hash(req.body.password,10).then((hash)=>{
    const newUser = new User({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
  
    newUser.save()
    .then((data) => {
      res.json(data);
      })
    .catch((error) => {
      if(error){
        res.status(400).json(error).json({error: error});
      }
      });


  }).catch((error)=>res.status(400).json({error:error}))
 
  
});

module.exports = router;
