const mongoose = require('mongoose');

const todo_schema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    },
},{timestamps: true});

module.exports = mongoose.model('todo',todo_schema);