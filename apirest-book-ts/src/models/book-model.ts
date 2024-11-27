import { Schema, model, Types } from 'mongoose';

export interface IBook {
    _id?: Types.ObjectId; 
    title: string; 
    description: string; 
    image: string; 
    author_ids: Types.ObjectId[]; 
    category_ids: Types.ObjectId[]; 
    language: string; 
    type: string; 
    pages: number; 
    dimensions: string; 
    publication_date: Date; 
    price: number; 
    discount: number; 
    stock: number; 
    state: 'available' | 'unavailable'; 
    reviews: Types.ObjectId[]; 
    publisher: string; 
}

const bookSchema = new Schema<IBook>(
    {
        title: { type: String, required: true },
        description: { type: String},
        image: { type: String, required: true },
        author_ids: [{ type: Schema.Types.ObjectId, ref: 'Author', required: true }],
        category_ids: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
        language: { type: String, required: true },
        type: { type: String, required: true },
        pages: { type: Number, required: true, min: 1 },
        dimensions: { type: String, required: true },
        publication_date: { type: Date, required: true },
        price: { type: Number, required: true, min: 0 },
        discount: { type: Number, default: 0, min: 0, max: 100 },
        stock: { type: Number, required: true, min: 0, max: 500 },
        state: { type: String, required: true, enum: ['available', 'unavailable'] },
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', default: [] }],
        publisher: { type: String, required: true },
    }
);

const Book = model<IBook>('Book', bookSchema, 'books');
export default Book;
