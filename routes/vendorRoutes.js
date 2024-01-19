const express=require("express")
const vendorController=require('./../controllers/vendorController')
const router=express.Router();

router.route('/signup').post(vendorController.createVendor)
//router.route('/newuserverify').post(vendorController.vendorVerify)


module.exports=router;

