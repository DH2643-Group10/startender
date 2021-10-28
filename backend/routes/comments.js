const router = require("express").Router();
const mongoose = require ('mongoose')
const Comment = require("../models/comment.models.js");
const { ObjectId }  = require("mongodb");




//Delete comment by id
router.route('/delete/:id').delete( async(req,res) => {
  var commentId = req.params.id
 
  try {
    var deleteComment = await  Comment.findByIdAndDelete(commentId)
    if(deleteComment!=null){
      res.status(200).json({statusMessage:'Comment deleted!'})
    } else{
      res.status(200).json({statusMessage: 'Comment does not exist'})
    }
   
    
    console.log("deleteComment",deleteComment)
  
}
catch(error){
  console.log("comments error:", error)
  res.status(400).json({error:error})
}

})





//Find all comments for a drink
router.route('/:id').get(async(req,res) => {
  
  var cocktailID = req.params.id
  console.log("cocktailID:",cocktailID)

  try {
      var comments = await Comment.find( {cocktailDBId:cocktailID})
    if (comments.length>0){
      res.status(200).json({comments:comments})
    }
  }
  catch(error){
    console.log("comments error:", error)
    res.status(400).json({error:error})
  }
 
  console.log("comments",comments)
  // .then(comments=> res.status(200).json({comments:comments}))
  // .catch((error)=>{
  //   console.log("comments error:", error)
  //   res.status(400).json({error:error})
  
  // })

})


//Post comment on drink
router.post('/create', (req, res) => {
  // var drinkNo = req.params.drinkNumber
  //res.send('send')
  const newComment = new Comment({
    
    cocktailDBId: req.body.cocktailDBId,
    // drinkId: req.body.drinkId,
    userId: req.body.userId,
    name: req.body.name,
    comment: req.body.comment,
    username: req.body.username,
  });
  newComment
    .save()
    .then((data) => {
      console.log("data",data)
      res.status(200)
      res.json(data);
      // res.json({message:'Comment created!'});
    })
    .catch((error) => {
      res.status(400).json({error:error});
    });
});

//Find all comments from a user 
router.route('/usercomments/:id').get(async(req,res) => {
  var userId = req.params.id
  // var comments = await Comment.find({userId : ObjectId(userId)})
  // console.log("comments",comments)

try {
  var comments = await Comment.find({userId : ObjectId(userId)})
  if (comments.length>0){
    res.status(200).json({comments:comments})
  }
}
catch(error){
  console.log("comments error:", error)
  res.status(400).json({error:error})
}


  // try {
  //     var user = await Comment.find({userId : ObjectId(userId)})

  //   if (user.length>0){
  //     var user = user[0]

  //     //no need to send password to client
  //     user.password=""
      
  //     res.status(200).json({user:user})
  //   } 
  // }
  // catch(error){
  //   console.log("comments error:", error)
  //   res.status(400).json({error:error})
  // }
 

})

module.exports = router;
