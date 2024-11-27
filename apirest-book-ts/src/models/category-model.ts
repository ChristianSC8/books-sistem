import { Schema, model, Types } from 'mongoose';

export interface ICategory {
  _id?: Types.ObjectId;
  name: string;
  description: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Category = model<ICategory>('Category', categorySchema, 'categories');

export default Category;
