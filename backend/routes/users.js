const router = require("express").Router();
let User = require("../models/user.models.js");
const bcrypt = require('bcrypt')
const {checkError} = require('../errorCodes')
//Find user all users
router.route('/').get((req, res) => {
  User.find().
    then(users=> res.json(users))
    .catch(error=>{res.status(400).json(error)})
})

//Create new user
//Todo: fixa unique email och unique username bad request message.
router.route('/add').post((req, res) => {
  console.log("/add req",req.body)
  bcrypt.hash(req.body.password,10).then((hash)=>{
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
  
    newUser.save()
    .then((data) => {
      //we dont want to send the hashed password
      data.password=""

      res.status(200)
      res.json({user:data});
      })
    .catch((error) => {
      console.log("error in users.js",error)
      console.log("error in users.js",error.code)
      if(error){
        var errorParse= checkError(error.code)
        res.status(errorParse.code)
        res.json({error:errorParse})
        // console.log(errorParse)
        // var data = {}

        // data.status=errorParse.code
        // data.error=errorParse
        // res.json(data);
      }
      });


  }).catch((error)=>{
    var errorParse= checkError(error.code)
    res.status(errorParse.code)
    res.json({error:errorParse})
  })
 
  
});

module.exports = router;
