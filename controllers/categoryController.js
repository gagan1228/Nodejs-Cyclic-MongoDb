const ApiFeatures=require('./../utils/apifeatures')
const Category=require('./../models/categoryModel')
const subcategory=require('./../models/subcategoryModel')
exports.createCategory = async(req,res)=>{
    try
    {
     const newCategory=await Category.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            tour:newCategory

        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}
exports.getallCategory =async (req,res)=>{
    try
    {
     const tour=await Category.find();
    res.status(200).json({
        status:'success',
        data:{
          tour
        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}
exports.createsub = async (req,res) =>{
    try
    {
     const newsubcat=await subcategory.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            tour:newsubcat

        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}
}
exports.getallsubcat =async (req,res)=>{
    try
    {
     const subcat=await subcategory.find();
    res.status(200).json({
        status:'success',
        length:subcat.length,
        data:{
          subcat
        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}
exports.getCategory =async (req,res)=>{
    try
    {
     const category=await Category.findById(req.params.id);
    res.status(200).json({
        status:'success',
        data:{
          category
        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}
exports.getsubcat =async (req,res)=>{
    try
    {
     const subcat=await subcategory.findById(req.params.id);
    res.status(200).json({
        status:'success',
        data:{
          subcat
        }
    })
    }catch(err){
    res.status(400).json({
        status:"fail",
        message:err
    })
    
}

}