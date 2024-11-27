import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB_CONN_URI;
if (!uri) {
  throw new Error('DB_CONN_URI is not defined in environment variables');
}

export const connectDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
