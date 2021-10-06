const router = require("express").Router();
const mongoose = require ('mongoose')
const Comment = require("../models/comment.models.js");
const { ObjectId }  = require("mongodb");



//Delete comment by id
router.route('/delete/:id').delete((req,res) => {
  Comment.findByIdAndDelete(req.params.id)
  .then(comment=> res.json('Your comment has been deleted!' + comment))
  .catch(error=>{res.status(400).json(error)})

})


// //Find comment by id
// router.route('/:id').get((req,res) => {
//   Comment.findById(req.params.id)
//   .then(comment=> res.json(comment))
//   .catch(error=>{res.status(400).json(error)})

// })


//Find all comments for a drink
router.route('/:id').get((req,res) => {
var objId = new ObjectId(req.params.id)
  Comment.find(objId)
  .then(comments=> res.json(comments))
  .catch(error=>res.status(400).json('Error: ' + error))

})

//Post comment on drink
router.post('/create', (req, res) => {
  //res.send('send')
  const newComment = new Comment({
    drinkId: req.body.drinkId,
    userId: req.body.userId,
    comment: req.body.comment,
  });
  newComment
    .save()
    .then((data) => {
      res.json('Comment created!: ' + data);
    })
    .catch((error) => {
      res.json(error);
    });
});


module.exports = router;
