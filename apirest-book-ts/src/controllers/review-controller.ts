import { Request, Response } from 'express';
import { IReview } from '../models/review-model';
import { 
    createReview 
} from '../services/review-service';


export const createReviewController = async (req: Request, res: Response) => {
    const data: IReview = req.body;
    try {
        const newReview = await createReview(data);
        if (newReview) {
            res.status(201).json({
                message: 'Review has been successfully created.',
                data: newReview
            });
        } else {
            res.status(400).json({
                message: "Failed to create review"
            });
        }
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

