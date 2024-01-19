const Vendor=require('./../models/vendormodel')
const jwt=require('jsonwebtoken')
const accountSid="AC565ca0474e2133663cf6a116ca2ef217"
const authToken="7e5ddcf9d8c0ef32ec034f1a9c8ef176"
const client=require("twilio")(accountSid,authToken)

// let Otp,user;
// exports.VendorSignup=async(req,res)=>{
   
//     try{
//         const {name,username,email,number}=req.body
//          user=req.body
//         const existingvendor=await Vendor.findOne({number})
//         if(existingvendor)
//         {
//             res.status(400).json({
//                 msg:"Vendor with this mobile number exists"
//             })
//         }
//         let digits="0123456789"
//         Otp=""
//         for(let i=0;i<4;i++)
//         {
//             Otp+=digits[Math.floor(Math.random()*10)]
//         }
//         console.log(Otp)
//     //     await client.messages.create({
//     //         body:`Your otp verification for user ${username} is ${Otp}`,
//     //         messagingServiceSid:"MG30076f025dc377d03a3cb7cb2a168026",
//     //         to:"+917338427124"
//     //     })
//     //    // .then(()=>res.status(200).json({msg:"Message sent"}))
//     //     .done();
//     client.messages
//     .create({
//                 to: '+917338427124',
//                 body:`Your otp verification for user ${username} is ${Otp}`,
//                messagingServiceSid:'MG30076f025dc377d03a3cb7cb2a168026'
//     })
//     .then(message => console.log(message.sid))
//     .done();
    
//     }catch(e)
//     {
//         res.status(500).json({error:e.message})
//     }
    
// }
// exports.vendorVerify=async(req,res)=>{
//     try{
//         console.log(req.body)
//         const{otp}=req.body
//         if(otp!=Otp)
//         {
//             return res.status(400).json({msg:"Incorrect otp"})
//         }
//        // const token=jwt.sign({})
//        const newVendor=await Vendor.create(user)
//        res.status(200).json({vendor:newVendor})
//        Otp=""
//     }
//     catch(e)
//     {
//         res.status(500).json({error:e.message})
//     }
// }
exports.createVendor=async(req,res)=>{
    try
    {
     const newVendor=await Vendor.create(req.body);
     const token=jwt.sign({id: newVendor._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
     })
    res.status(201).json({
        status:'success',
        token:token,
        data:{
            vendor:newVendor

        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}
}
exports.getallvendors=async(req,res)=>{
    try{
    const vendors=await Vendor.find();
    res.status(200).json({
        status:'success',
        data:{
            results:vendors.length,
            data:{
                vendors
            }

        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}