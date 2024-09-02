const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    name:String,
    title:String,
    phone:Number,
    description:String,
    extraInfo:String,
    address:String,
    tags:{},
    photos:[String],
    startTime:String,
    endTime:String,
})

const complaintModel = mongoose.model('complaint',complaintSchema);
module.exports =  complaintModel;