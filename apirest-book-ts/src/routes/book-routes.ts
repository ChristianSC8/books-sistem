import { Router } from 'express';

import {
    getAllBooksController,
    getBookByIdController,
    createBookController,
    updateBookController,
    deleteBookController
} from '../controllers/book-controller';

const router = Router();

router.get('/books', getAllBooksController);
router.get('/book/:id', getBookByIdController);
router.post('/book', createBookController);
router.put('/book/:id', updateBookController);
router.delete('/book/:id', deleteBookController);

export default router;
