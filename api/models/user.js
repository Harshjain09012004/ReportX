const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrimePortal');

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    complaints:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'complaint'
    }],
});

const userModel = mongoose.model('User',userSchema);
module.exports = userModel;