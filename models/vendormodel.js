const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')

const VendorSchema=new mongoose.Schema({
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
        required:[true,'Please confirm your password'],
        validate:{
            //This only works on create and save 
            validator:function(el)
            {
                return el===this.password //abc===abc
            },
            message:'Passwords are not the same'
        }

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
VendorSchema.pre('save', async function(next){
   if(!this.isModified('password'))
   return next()
//hash the password to the cost of 12
this.password=await bcrypt.hash(this.password,12)
//delete the confirm password field
this.passwordConfirm=undefined
next()
    
})

const Vendor=mongoose.model('Vendor',VendorSchema)
module.exports=Vendor