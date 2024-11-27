import { Router } from 'express';

import {
    createReviewController
} from '../controllers/review-controller';

const router = Router();
router.post('/review', createReviewController);
export default router;
