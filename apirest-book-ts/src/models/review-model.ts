import { Schema, model, Types } from 'mongoose';

export interface IReview {
    _id?: Types.ObjectId;
    user_id: Types.ObjectId;
    book_id: Types.ObjectId;
    rating: number;
    review_text: string;
    date: Date;
}

const reviewSchema = new Schema<IReview>({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review_text: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
});

const Review = model<IReview>('Review', reviewSchema, 'reviews');

export default Review;
