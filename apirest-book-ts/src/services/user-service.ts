import User, { IUser } from '../models/user-model';

export const getAllUsers = async (): Promise<IUser[]> => {
    try {
        return await User.find().populate('reviews');
    } catch (error: any) {
        throw new Error(`Failed to fetch users: ${error.message || 'Unknown error'}`);
    }
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    try {
        const user = await User.findById(id).populate('reviews');
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error: any) {
        throw new Error(`Failed to get user: ${error.message || 'Unknown error'}`);
    }
};

export const createUser = async (userData: IUser): Promise<IUser> => {
    try {
        const newUser = new User(userData);
        return await newUser.save();
    } catch (error: any) {
        throw new Error(`Failed to create user: ${error.message || 'Unknown error'}`);
    }
};

export const updateUser = async (id: string, userData: IUser): Promise<IUser | null> => {
    try {
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return null
        }
        return await User.findByIdAndUpdate(
            id,
            userData,
            { new: true }
        ).populate('reviews');
    } catch (error: any) {
        throw new Error(`Failed to update user: ${error.message || 'Unknown error'}`);
    }
};

export const deleteUser = async (id: string): Promise<boolean> => {
    try {
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return false;
        }
        return true;
    } catch (error: any) {
        throw new Error(`Failed to delete user: ${error.message || 'Unknown error'}`);
    }
};
