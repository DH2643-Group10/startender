const mongoose = require ('mongoose')


const Comment = new mongoose.Schema({
    
    userId: {
        type:String,
        required: true,

    },
    drinkId: {
        type:String,
        required: true,
    },
    comment: {
        type:String,
        required: true
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