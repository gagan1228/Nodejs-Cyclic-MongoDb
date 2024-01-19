const { text } = require('express');
const mongoose=require('mongoose')
const categoriesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A category must have name"],
        unique:true
    },
    catimg:{
        type:String,
        required:[true,"A category must have a image"]
    }
})


const Category=mongoose.model('Category',categoriesSchema)
module.exports=Category