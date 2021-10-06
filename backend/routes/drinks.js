const router = require("express").Router();
const mongoose = require ('mongoose')
const Drink = require("../models/drink.model.js");




//Delete drink by id
router.route('/delete/:id').delete((req,res) => {
  Drink.findByIdAndDelete(req.params.id)
  .then(drinks=> res.json(drinks))
  .catch(error=>{res.status(400).json(error)})

})


//Find drink by id
router.route('/:id').get((req,res) => {
  Drink.findById(req.params.id)
  .then(drinks=> res.json(drinks))
  .catch(error=>{res.status(400).json(error)})

})


//Find all drinks
router.route('/').get((req,res) => {
  Drink.find()
  .then(drinks=> res.json(drinks))
  .catch(error=>{res.status(400).json(error)})

})

//Create new drink
router.post('/create', (req, res) => {
  //res.send('send')
  const newDrink = new Drink({
    userId: req.body.userId,
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
  });
  newDrink
    .save()
    .then((data) => {
      res.json('Drink created!: ' + data);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Update drink by id
router.post('/update/:id', (req, res) => {
  Drink.findByIdAndUpdate(req.params.id).then(drink=>{
    drink.name = req.body.name;
    drink.description = req.body.description;
    drink.ingredients = req.body.ingredients;

    drink.save()
    .then((data) => 
      res.json('Drink updated!:' + data)
    )
    .catch((error) => 
      res.status(400).json('Error: ' + error));
    
  }).catch(error => res.status(400).json('Error: ' + error))

  
    
});

module.exports = router;
