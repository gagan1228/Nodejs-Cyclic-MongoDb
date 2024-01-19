const express=require("express")
const tourController=require('./../controllers/tourController')
const router=express.Router();
router.route('/top-2-tours').get(tourController.aliasTopTours , tourController.getAllTours);
router.route('/').get(tourController.getAllTours).post(tourController.createTour);
router.route('/:id').get(tourController.getTour).patch(tourController.updateTour);

module.exports=router;

