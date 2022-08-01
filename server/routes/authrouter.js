import Express from 'express';
import {signin,signup} from './../controller/authcontroller.js'

const router=Express.Router();


router.get('/',(req,res)=>{
    res.status(500).json({message:'Auth api'});
});
router.post('/signin',signin);
router.post('/signup',signup);

export default router;