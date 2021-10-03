const mongoose = require ('mongoose')

const customDrinkTemplate = new mongoose.Schema({

    userId: {
        type:String,
        required: true},
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    ingredients: {
        type:Array
    },
    date:{
        type: Date,
        default: Date.now
    }},
    {
        timestamps:true,
    }
)
module.exports = mongoose.model('customdrinks', customDrinkTemplate)