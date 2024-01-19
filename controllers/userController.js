const ApiFeatures=require('./../utils/apifeatures')
const User=require('./../models/usermodel')

exports.createUser = async(req,res)=>{
    try
    {
     const user=await User.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            user:user

        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}