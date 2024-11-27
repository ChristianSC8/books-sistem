import { Request, Response } from 'express';

import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser
} from '../services/user-service';

import { IUser } from '../models/user-model';

export const getAllUsersController = async (_req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        if (users.length > 0) {
            res.status(200).json({
                message: 'Successfully fetched all users.',
                data: users
            });
        } else {
            res.status(404).json({ message: 'No users found' });
        }
    } catch (error) {
        console.error('Failed to fetch users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getUserByIdController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const user = await getUserById(userId);
        if (user) {
            res.status(200).json({
                message: 'User found successfully.',
                data: user
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Failed to fetch user by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createUserController = async (req: Request, res: Response) => {
    const data: IUser = req.body;
    try {
        const newUser = await createUser(data);
        if (newUser) {
            res.status(201).json({
                message: 'User has been successfully created.',
                data: newUser
            });
        } else {
            res.status(400).json({
                message: "Failed to create user"
            });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: IUser = req.body;
    try {
        const updatedUser = await updateUser(id, data);
        if (updatedUser) {
            res.status(200).json({
                message: 'User updated successfully.',
                data: updatedUser
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.params.id; 
    try {
        const result = await deleteUser(userId);
        if (result) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
