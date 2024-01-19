const mongoose=require('mongoose')
const validator=require('validator')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A Vendor must have a name"],
        },

    username:{
        type:String,
        required:[true,"A Vendor must have a username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"A Vendor must provide an email"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide an valid email']

    },
    photo: String,
    password:{
        type:String,
        required:[true,'Please confirm your password'],
        minlength:8
    },
    passwordConfirm:{

        type:String,
        required:[true,'Please confirm your password']

    },
    phone:{
        type:Number,
        required:[true,"A Vendor must have a number"]
    },
    phoneVerified:{
        type:Boolean,
        default:false
    }

}
);

const User=mongoose.model('User',UserSchema)
module.exports=User