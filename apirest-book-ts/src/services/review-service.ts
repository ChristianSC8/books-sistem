import Review, { IReview } from '../models/review-model';

export const createReview = async (reviewData: IReview): Promise<IReview> => {
    try {
        const review = new Review(reviewData);
        return await review.save();
    } catch (error: any) {
        throw new Error(`Failed to create review: ${error.message || 'Unknown error'}`);
    }
};
