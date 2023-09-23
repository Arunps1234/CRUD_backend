const express = require("express")
const app = express();
const cors = require("cors")

require("./DB/conncetion")
const users = require("./DB/Schema")

app.use(express.json())
app.use(cors())

app.listen(5000, function(){
    console.log("The server is ruuning at port:5000")
});

//CREATE
app.post("/create", async function(req, res){
const { Firstname , Lastname , Email , Phonenumber} = req.body

const createUser = (await users.create({Firstname, Lastname, Email, Phonenumber})).save();

res.send(createUser)

});

//GET SINGLE USER
app.get("/singleuser/:id", async function(req, res){
    const uid = req.params.id;

    const getUser =await users.findById({_id:uid});
    res.json(getUser)
})



//GET ALL USER
app.get("/getusers" , async (req, res)=>{
    const getUsers = await users.find({});
    res.send(getUsers)
})

// DELETE USER
app.delete("/delete/:id", async (req, res) =>{
    const uid = req.params.id;

    const deleteuser = await users.findByIdAndDelete({_id:uid})
    res.json({"msg":"Deleted successfully"})
})

//UPDATE USER

app.put("/edit/:id", async function(req, res){
    const uid = req.params.id
    const {Firstname, Lastname, Email , Phonenumber} = req.body;
    const editUser = await users.findByIdAndUpdate({_id:uid}, {Firstname:Firstname, Lastname:Lastname, Email:Email , Phonenumber:Phonenumber})
if(editUser){
    res.send("Edited successfully")
}
else{
    res.send("Failed to Edit the data")
}

})


