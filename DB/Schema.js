const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    Firstname : {
        type : String,
        required : true
    },

    Lastname : {
        type : String,
        required : true
    },


    Email : {
        type : String,
        required : true
    },


    Phonenumber : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("users", userSchema)