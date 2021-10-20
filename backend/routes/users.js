const router = require("express").Router();
let User = require("../models/user.models.js");
const Comment = require("../models/comment.models.js")
const bcrypt = require('bcrypt')
const {checkError} = require('../errorCodes')
const { ObjectId }  = require("mongodb");

//Find user all users
// router.route('/').get((req, res) => {
//   User.find().
//     then(users=> res.json(users))
//     .catch(error=>{res.status(400).json(error)})
// })

//Create new user
//Todo: fixa unique email och unique username bad request message.
router.route('/add').post((req, res) => {
  console.log("/add req",req.body)
  bcrypt.hash(req.body.password,10).then((hash)=>{
    const newUser = new User({
      _id: ObjectId(),
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

//Find all comments by a user
// router.route('/:userId').get((req,res) => {
//   console.log("req.params.userId",req.params.userId)
//   Comment.find({userId:req.params.userId})
//   // Commment.find()
//   .then(comments=> res.status(200).json({comments:comments}))
//   .catch(error=>{res.status(400).json(error)})

// })


//find specific user with ${id}
router.route('/:id').get(async(req,res) => {


  var userId = req.params.id


  try {
      var user = await User.find({"_id" : ObjectId(userId)})

    if (user.length>0){
      var user = user[0]

      //no need to send password to client
      user.password=""
      
      res.status(200).json({user:user})
    } 
  }
  catch(error){
    console.log("comments error:", error)
    res.status(400).json({error:error})
  }
 

})

module.exports = router;
