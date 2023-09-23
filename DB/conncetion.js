const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myServer").then(res=>{
    console.log("Connected to DB successfully")
}).catch(err=>{
    console.log("Failed to connect to DB")
})