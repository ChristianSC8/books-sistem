import { Request, Response } from 'express';
import { ICategory } from '../models/category-model';

import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    getCategoryByName,
    updateCategory
} from '../services/category-service';

export const getAllCategoriesController = async (_req: Request, res: Response): Promise<void> => {
    try {
        const categories = await getAllCategories();
        if (categories.length > 0) {
            res.status(200).json({
                message: 'Successfully fetched all categories.',
                data: categories
            });
        } else {
            res.status(404).json({ message: 'No categories found' });
        }
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getCategoryByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const category = await getCategoryById(id);
        if (category) {
            res.status(200).json({
                message: 'Category found successfully.',
                data: category
            });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        console.error('Failed to fetch category by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createCategoryController = async (req: Request, res: Response): Promise<void> => {
    const data: ICategory = req.body;
    try {
        const newCategory = await createCategory(data);
        if (newCategory) {
            res.status(201).json({
                message: 'Category has been successfully created.',
                data: newCategory
            });
        } else {
            res.status(400).json({
                message: "Failed to create category"
            });
        }
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateCategoryController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const data: ICategory = req.body;
    try {
        const updatedCategory = await updateCategory(id, data);
        if (updatedCategory) {
            res.status(200).json({
                message: 'Category updated successfully.',
                data: updatedCategory
            });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteCategoryController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const result = await deleteCategory(id);
        if (result) {
            res.status(200).json({ message: 'Category deleted successfully' });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// ----------------------------------

export const findCategoryByNameController = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params; // Obtenemos el nombre desde los parámetros de la URL

    try {
        const category = await getCategoryByName(name); // Llamamos al servicio para obtener la categoría

        if (category) {
            res.status(200).json(category);  // Si la categoría existe, retornamos el id y nombre
        } else {
            res.status(404).json({ message: `Categoría no encontrada: ${name}` });
        }
    } catch (error) {
        res.status(500).json({ message: `Error al buscar categ` });
    }
};