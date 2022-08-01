import Express from 'express';
import {postdata,del,getd} from './../controller/postcontroller.js'


const router=Express.Router();

router.post('/byemail',getd);
router.post('/',postdata);
router.delete('/:a/:b',del);

export default router;