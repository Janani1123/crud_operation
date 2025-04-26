const mongoose = require('mongoose')
require('dotenv').config()

const connection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL) 
        console.log("Database connected !")    
    }
    catch(e)
    {
        console.log(e)
       // Jananis21it
    }
}


module.exports=connection