const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://renio067778:5yNQqAwz95f46UbG@cluster0.gpp6k.mongodb.net/")

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    password:String,
    age:String,
    isMarried:Boolean,
    email:String,
    isAdmin:String
})

module.exports = mongoose.model("user", userSchema)