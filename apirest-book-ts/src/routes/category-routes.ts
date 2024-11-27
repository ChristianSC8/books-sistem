import { Router } from 'express';

import {
    getAllCategoriesController,
    getCategoryByIdController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
    findCategoryByNameController
} from '../controllers/category-controller';

const router = Router();

router.get('/categories', getAllCategoriesController);
router.get('/category/:id', getCategoryByIdController);
router.post('/category', createCategoryController);
router.put('/category/:id', updateCategoryController);
router.delete('/category/:id', deleteCategoryController);

router.get('/category/name/:name', findCategoryByNameController);

export default router;
