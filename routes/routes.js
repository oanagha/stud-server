const express=require('express')

const userController=require('../controllers/userController')
const studentController=require('../controllers/studentController')

const jwtmiddle=require('../Middleware/jwtMiddleware')
const multerInstance=require('../Middleware/multerConfig')

const router=express.Router()

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)

router.post('/addstudents',jwtmiddle,multerInstance.single('image'),studentController.addStudents)
router.get('/getstudents',jwtmiddle,studentController.getStudents)
router.delete('/deletestudents/:id',jwtmiddle,studentController.deleteStudents)
router.put('/updatestudents/:id',jwtmiddle,multerInstance.single('image'),studentController.updateStudents)
module.exports=router