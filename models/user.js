const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new Schema({
    fullName:{
        type: String,
        required: [true,'Full name is required!']
    },
    email:{
        type: String,
        required: [true,'Email is required!']
    },
    phone:{
        type: Number,
        required: [true,'Phone Number is required']
    },
    year:{
        type:Number,
        required: [true,'year is required']
    },
    branch:{
        type: String,
        required:[true,'branch is required']
    },
    Payimage:{
        type: String,
        requires: [true,'Payment ss is required']
    },
    TransactionId:{
        type:Number,
        required: [true,'transaction id is required']
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model('User',userSchema);

