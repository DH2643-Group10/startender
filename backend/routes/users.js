const router = require("express").Router();
let User = require("../models/user.models.js");
const Comment = require("../models/comment.models.js")
const bcrypt = require('bcrypt')
const {checkError} = require('../errorCodes')
const { ObjectId }  = require("mongodb");

//functions to check if id is containted within array of objects (favourited drinks) 
const checkObjId = (obj,id,idNo) => {
  for (const [key, value] of Object.entries(obj)) {
    if(key===id && value==idNo ){
      return true
    }
    else{
      return false
    }
  }
  
  }
  
  const checkArray = (checkFor,inArray) => {
    var bool = false
    inArray.forEach(each => {
          if(checkObjId(each,"favId",checkFor)){
            bool=true
          }
        }
     )
     return bool
  }
//Create new user


router.route('/add').post((req, res) => {

  console.log("/add req",req.body)
  bcrypt.hash(req.body.password,10).then((hash)=>{
    const newUser = new User({
      _id: ObjectId(),
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      favourites: []
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
        console.log("errorParse",errorParse.msg)

        res.status(errorParse.code)
        res.json({errorMessage:errorParse.msg})
      }
      });

  }).catch((error)=>{
    var errorParse= checkError(error.code)
    res.status(errorParse.code)
    res.json({errorMessage:errorParse.msg})
  })
});



//Add CocktailID to favourites
router.route('/favourites/add').post(async(req,res) => {
// router.route('/favourites/:update').post(async(req,res) => {
  //send favourites/"update"/"remove" for adding/removing id
  // var update = req.params.update
  
  console.log("/favourites/add req.body",req.body)
  var username = req.body.username
  var updateId= req.body.updateId
  var cocktailName = req.body.cocktailName
  var cocktailImgUrl = req.body.cocktailImgUrl
  var updateId= req.body.updateId
  var favourites= req.body.favourites




  if(!checkArray(updateId,favourites))
  // if(!favourites.includes(updateId))
  {
    console.log("does not include, therefore we going to add it")
    var updateUser = await User.findOneAndUpdate({username:username},{new:true})

    // if (update==="update"){
      updateUser.favourites.push({favId:updateId,cocktailName: cocktailName, cocktailImgUrl:cocktailImgUrl})
    // 
    updateUser.save().then(update => {
      
     


      console.log("favourite has been added", update)



      res.status(200)
      res.json({user:update});
      return
    })
      // .catch((error) => {
      //   console.log("error in users.js",error)
      //   console.log("error in users.js",error.code)
      //   if(error){
      //     var errorParse= checkError(error.code)
      //     console.log("errorParse",errorParse.msg)
  
      //     res.status(errorParse.code)
      //     res.json({errorMessage:errorParse.msg})
      //   }
      //   });
  } 
})

//REMOVE favourite with CocktailID from  favourites
router.route('/favourites/remove').post(async(req,res) => {
  // router.route('/favourites/:update').post(async(req,res) => {
    //send favourites/"update"/"remove" for adding/removing id
    // var update = req.params.update
    
    console.log("/favourites/remove req.body",req.body)
    var username = req.body.username
    var updateId= req.body.updateId
    var favourites= req.body.favourites
    
    if(checkArray(updateId, favourites))

    // if(favourites.includes(updateId))
    console.log("drink exist in favourite and shall be removed:", updateId)

    //if the cocktailId already exist in the favourites ( remove it) and update the favourites array
    {
      var updateUser = await User.findOneAndUpdate({username:username},{favourites: favourites.filter(each=> each.favId!=updateId && checkArray(each.favId,favourites))},{new:true})
      // var updateUser = await User.findOneAndUpdate({username:username},{favourites: favourites.filter(item=>item!==updateId)},{new:true})
      console.log("removed id from favourites and updated the user:", updateUser)
      // // if (update==="remove"){
        // updateUser.favourites.pull(updateId)
      // // }
      
      updateUser.save().then(update => {
        console.log("favourite has been removed:",update)
        res.status(200)
        res.json({user:update});})
        .catch(error=>{console.log(error)})
  
      //   return
    }
 
  })
  




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
