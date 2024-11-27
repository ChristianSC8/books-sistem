import { Schema, model, Types } from 'mongoose';

export interface IAuthor {
    _id?: Types.ObjectId;
    name: string;
    biography: string;
    books: Types.ObjectId[];
}

const authorSchema = new Schema<IAuthor>({
    name: { type: String, required: true },
    biography: { type: String },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const Author = model<IAuthor>('Author', authorSchema, 'authors');

export default Author;
