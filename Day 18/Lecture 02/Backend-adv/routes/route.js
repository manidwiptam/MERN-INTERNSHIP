import express from 'express'
import { hello,send,update,delition} from '../controllers/controller.js'
import auth from '../middleware/auth.js'

const router = express.Router()

//endpoints

// router.get('/greet',(req,res)=>{
//     res.json({message:"Welcome....."})
// })                                     --> controller.js

//endpoints, if we want to protect this have to use middleware
//get method
router.get('/fetch',auth,hello)

//endpoints,post method
router.post('/send',auth,send)

//endpoints,put method
router.put('/update',auth,update)

//endpoints,delete method
router.put('/update',auth,delition)


export default router
