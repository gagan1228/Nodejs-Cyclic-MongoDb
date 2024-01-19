const express=require("express")
const userController=require('./../controllers/userController')
const router=express.Router();
// router.route('/top-2-tours').get(tourController.aliasTopTours , tourController.getAllTours);
// router.route('/').get(tourController.getAllTours).post(tourController.createTour);
// router.route('/:id').get(tourController.getTour).patch(tourController.updateTour);
router.route('/signup').post(userController.createUser)
module.exports=router;

