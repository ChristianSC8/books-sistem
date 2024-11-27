import Book, { IBook } from '../models/book-model';

export const getAllBooks = async (): Promise<IBook[]> => {
    try {
        return await Book.find().populate('author_ids category_ids reviews');
    } catch (error: any) {
        throw new Error(`Failed to fetch books: ${error.message || 'Unknown error'}`);
    }
};

export const getBookById = async (id: string): Promise<IBook | null> => {
    try {
        return await Book.findById(id).populate('author_ids category_ids reviews');
    } catch (error: any) {
        throw new Error(`Failed to get book: ${error.message || 'Unknown error'}`);
    }
};

export const createBook = async (bookData: IBook): Promise<IBook> => {
    try {
        const newBook = new Book(bookData);
        return await newBook.save();
    } catch (error: any) {
        throw new Error(`Failed to create book: ${error.message || 'Unknown error'}`);
    }
};

export const updateBook = async (id: string, bookData: IBook): Promise<IBook | null> => {
    try {
        const existingBook = await Book.findById(id);
        if (!existingBook) {
            return null
        }
        return await Book.findByIdAndUpdate(
            id,
            bookData,
            { new: true }
        ).populate('author_ids category_ids reviews');
    } catch (error: any) {
        throw new Error(`Failed to update book:${error.message || 'Unknown error'} `);
    }
};

export const deleteBook = async (id: string): Promise<boolean> => {
    try {
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return false;
        }
        return true;
    } catch (error: any) {
        throw new Error(`Failed to delete book: ${error.message || 'Unknown error'}`);
    }
};
