import { Router } from 'express';

import {
    getAllUsersController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
} from '../controllers/user-controller';

const router = Router();
router.get('/users', getAllUsersController);
router.get('/user/:id', getUserByIdController);
router.post('/user', createUserController);
router.put('/user/:id', updateUserController);
router.delete('/user/:id', deleteUserController);
export default router;
