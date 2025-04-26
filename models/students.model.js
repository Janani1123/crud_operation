const mongoose = require('mongoose')


const student = mongoose.Schema({
    name:
    {
        type:String,
        required:true
    }
})

const studentdb=mongoose.model("students",student)
module.exports=studentdb