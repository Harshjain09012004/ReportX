const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminDet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
})

const adminModel = mongoose.model('admin',adminSchema);
module.exports =  adminModel;