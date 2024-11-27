import { Request, Response } from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../services/book-service';

export const getAllBooksController = async (_req: Request, res: Response): Promise<void> => {
    try {
        const books = await getAllBooks();
        if (books.length > 0) {
            res.status(200).json({
                message: 'Successfully fetched all books.',
                data: books
            });
        } else {
            res.status(404).json({ message: 'No books found' });
        }
    } catch (error) {
        console.error('Failed to fetch books:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getBookByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const book = await getBookById(id);
        if (book) {
            res.status(200).json({
                message: 'Book found successfully.',
                data: book
            });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Failed to fetch book by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createBookController = async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    try {
        const newBook = await createBook(data);
        if (newBook) {
            res.status(201).json({
                message: 'Book has been successfully created.',
                data: newBook
            });
        } else {
            res.status(400).json({
                message: "Failed to create book"
            });
        }
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateBookController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedBook = await updateBook(id, data);
        if (updatedBook) {
            res.status(200).json({
                message: 'Book updated successfully.',
                data: updatedBook
            });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteBookController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const result = await deleteBook(id);
        if (result) {
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
