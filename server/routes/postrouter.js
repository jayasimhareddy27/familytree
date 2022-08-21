import Express from 'express';
import {postdata,del,getd,getid,shared} from './../controller/postcontroller.js'


const router=Express.Router();

router.post('/email',shared);
router.post('/byemail',getd);
router.post('/',postdata);
router.delete('/:a/:b',del);
router.patch('/byemail/:id/:email',getid);

export default router;