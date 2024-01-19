const express=require("express")
const vendorController=require('./../controllers/vendorController')
const router=express.Router();

router.route('/signup').post(vendorController.createVendor)
router.route('/').get(vendorController.getallvendors)
//router.route('/newuserverify').post(vendorController.vendorVerify)


module.exports=router;

