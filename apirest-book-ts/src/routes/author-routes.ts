import { Router } from 'express';

import {
    getAllAuthorsController,
    getAuthorByIdController,
    createAuthorController,
    updateAuthorController,
    deleteAuthorController,
    findAuthorByNameController
} from '../controllers/author-controller';

const router = Router();

router.get('/authors', getAllAuthorsController);
router.get('/author/:id', getAuthorByIdController);
router.post('/author', createAuthorController);
router.put('/author/:id', updateAuthorController);
router.delete('/author/:id', deleteAuthorController);

router.get('/author/name/:name', findAuthorByNameController);

export default router;
