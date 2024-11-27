import { Request, Response } from 'express';

import {
    createAuthor,
    deleteAuthor,
    getAllAuthors,
    getAuthorById,
    getAuthorByName,
    updateAuthor
} from '../services/author-service';
import { IAuthor } from '../models/author-model';


export const createAuthorController = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: IAuthor = req.body;
        const newAuthor = await createAuthor(data);

        if (newAuthor) {
            res.status(201).json({
                message: 'Author has been successfully created.',
                data: newAuthor
            });
        } else {
            res.status(400).json({
                message: "Failed to create author"
            });
        }
    } catch (error) {
        console.error('Error creating author:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllAuthorsController = async (_req: Request, res: Response): Promise<void> => {
    try {
        const authors = await getAllAuthors();
        if (authors.length > 0) {
            res.status(200).json({
                message: 'Successfully fetched all authors.',
                data: authors
            });
        } else {
            res.status(404).json({ message: 'No authors found' });
        }
    } catch (error) {
        console.error('Failed to fetch authors:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAuthorByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const author = await getAuthorById(id);
        if (author) {
            res.status(200).json({
                message: 'Author found successfully.',
                data: author
            });
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error) {
        console.error('Failed to fetch author by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateAuthorController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const data: IAuthor = req.body;
    try {
        const updatedAuthor = await updateAuthor(id, data);
        if (updatedAuthor) {
            res.status(200).json({
                message: 'Author updated successfully.',
                data: updatedAuthor
            });
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error) {
        console.error('Error updating author:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteAuthorController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const result = await deleteAuthor(id);
        if (result) {
            res.status(200).json({ message: 'Author deleted successfully' });
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error) {
        console.error('Error deleting author:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// ----------------------------------

export const findAuthorByNameController = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params; // Obtenemos el nombre desde los parámetros de la URL

    try {
        const author = await getAuthorByName(name); // Llamamos al servicio para obtener la categoría

        if (author) {
            res.status(200).json(author);  // Si la categoría existe, retornamos el id y nombre
        } else {
            res.status(404).json({ message: `Author no encontrada: ${name}` });
        }
    } catch (error) {
        res.status(500).json({ message: `Error al buscar author` });
    }
};