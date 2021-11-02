const mongoose = require ('mongoose')


const Comment = new mongoose.Schema({
    cocktailDBId:{
        type: String,
    },
    userId: {
        type:String,
        required: true,
    },
    name:{
        type:String
    },
    drinkId: {
        type:String,
        // required: true,
    },
    comment: {
        type:String,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    strDrink: {
        type:String,
    },
    strDrinkThumb: {
        type:String,
    },
    date:{
        type: Date,
        default: Date.now
    }
}, {
    timestamps:true,
    }
)
module.exports = mongoose.model('comments', Comment)