const express=require("express")
const vendorController=require('./../controllers/vendorController')
const router=express.Router();

router.route('/signup').post(vendorController.createVendor)
router.route('/verifysignup').post(vendorController.signupvendor)
router.route('/').get(vendorController.getallvendors)
router.route('/login').post(vendorController.login)
//router.route('/newuserverify').post(vendorController.vendorVerify)
router.route('/forgotpassword').post(vendorController.forgotPassword)
router.route('/resetpassword/:token').post(vendorController.ResetPassword)
router.route('/updateMyPassword').patch(vendorController.protect,vendorController.updatePassword)
router.route('/updateMe').patch(vendorController.protect,vendorController.updateMe)
router.route('/deletevendor').delete(vendorController.protect,vendorController.deletevendor)
module.exports=router;

