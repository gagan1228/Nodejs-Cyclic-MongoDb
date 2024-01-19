const { text } = require('express');
const mongoose=require('mongoose')

const subcategorySchema=new mongoose.Schema({
    subname:{
        type:String,
        required:[true,"A category must have name"],
        unique:true,
    },
    subcategory:{
        type:String,
        required:[true,"A subcategory must have category mentioned in the schema"]
    },
    subcatimg:{
        type:String,
        required:[true,"A subcategory must have an image"]
    }
})
const subcategorySchema1=new mongoose.Schema({
    sname:{
        type:String,
        required:[true,"A category must have name"],
        unique:true,
    },
    scategory:{
        type:String,
        required:[true,"A subcategory must have category mentioned in the schema"]
    },
    scatimg:{
        type:String,
        required:[true,"A subcategory must have an image"]
    }
})


const Subcategory=mongoose.model('SubCategory',subcategorySchema)
const Subcategory1=mongoose.model('SubCategory1',subcategorySchema1)
module.exports=Subcategory1