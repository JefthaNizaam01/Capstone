import express from 'express';
import controller from '../Controllers/userController.js';
import onHashBefore from '../Middleware/hashPwd.js';


const router = express.Router();

router.route('/') 
    .get(controller.getAllUSers)
    .post(onHashBefore,controller.addNewUser)


router.route('/:id')
    .get(controller.getUser)
    .delete(controller.deleteUserByID)
    .patch(controller.editUserByID)


export default router