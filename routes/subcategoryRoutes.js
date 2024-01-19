const express=require("express")
const CategoryController=require('./../controllers/categoryController')
const router=express.Router();
router.route('/').get(CategoryController.getallsubcat).post(CategoryController.createsub)
router.route('/:id').get(CategoryController.getsubcat)

module.exports=router;

