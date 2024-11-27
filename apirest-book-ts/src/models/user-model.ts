import { Schema, model, Types } from 'mongoose';

export interface IUser {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    reviews: Types.ObjectId[];
    color: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    color: { type: String, required: false }
});

const User = model<IUser>('User', userSchema, 'users');

export default User;
