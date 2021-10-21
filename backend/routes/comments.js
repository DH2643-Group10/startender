const router = require("express").Router();
const mongoose = require ('mongoose')
const Comment = require("../models/comment.models.js");
const { ObjectId }  = require("mongodb");




//Delete comment by id
//perhaps implement authenticate??
router.route('/delete/:id').delete((req,res) => {
  Comment.findByIdAndDelete(req.params.id)
  .then(comment=> {
    res.status(200).json({message:'Your comment has been deleted!'})})
  .catch(error=>{res.status(400).json(error)})

})





//Find all comments for a drink
router.route('/:id').get(async(req,res) => {
  // console.log("req comments",req)
  // var cocktailID = req.query.id
  var cocktailID = req.params.id
  // console.log("cocktailID1;",cocktailID1)
  console.log("cocktailID2:",cocktailID)


   
  // var cocktailID = req.params.cocktailDBId

  // var objId = new ObjectId(req.params.id)
  // var objId = new Object(req.params.id)
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


// router.route('/:id').get((req,res) => {
  
//   var objId = new ObjectId(req.params.id)
//   Comment.find(objId)
//   .then(comments=> res.status(200).json({comments:comments}))
//   .catch((error)=>{
//     console.log("comments error:", error)
//     res.status(400).json({error:error})
  
//   })

// })




//Post comment on drink
router.post('/create', (req, res) => {
  // var drinkNo = req.params.drinkNumber
  //res.send('send')
  const newComment = new Comment({
    
    cocktailDBId: req.body.cocktailDBId,
    drinkId: req.body.drinkId,
    userId: req.body.userId,
    name: req.body.name,
    comment: req.body.comment,
  });
  newComment
    .save()
    .then((data) => {
      res.status(200)
      // res.json({data:data});
      res.json({message:'Comment created!'});
    })
    .catch((error) => {
      res.status(400).json({error:error});
    });
});


module.exports = router;
