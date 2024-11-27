import Author, { IAuthor } from '../models/author-model';

export const getAllAuthors = async (): Promise<IAuthor[]> => {
    try {
        return await Author.find().populate('books');
    } catch (error: any) {
        throw new Error(`Failed to fetch authors ${error.message || 'Unknown error'}`);
    }
};

export const getAuthorById = async (id: string): Promise<IAuthor | null> => {
    try {
        const author = await Author.findById(id).populate('books');
        if (!author) {
            throw new Error('Category not found');
        }
        return author;
    } catch (error: any) {
        throw new Error(`Failed to get author ${error.message || 'Unknown error'}`);
    }
};

export const createAuthor = async (authorData: IAuthor): Promise<IAuthor> => {
    try {
        const newAuthor = new Author(authorData);
        return await newAuthor.save();
    } catch (error: any) {
        throw new Error(`Failed to create author ${error.message || 'Unknown error'}`);
    }
};

export const updateAuthor = async (id: string, authorData: IAuthor): Promise<IAuthor | null> => {
    try {
        const existingAuthor = await Author.findById(id);
        if (!existingAuthor) {
            return null
        }
        return await Author.findByIdAndUpdate(
            id,
            authorData,
            { new: true }
        ).populate('books');
    } catch (error: any) {
        throw new Error(`Failed to update author ${error.message || 'Unknown error'}`);
    }
};

export const deleteAuthor = async (id: string): Promise<boolean> => {
    try {
        const result = await Author.findByIdAndDelete(id);
        if (!result) {
            return false;
        }
        return true;
    } catch (error: any) {
        throw new Error(`Failed to delete author ${error.message || 'Unknown error'}`);
    }
};




export const getAuthorByName = async (name: string): Promise<{ id: string, name: string } | null> => {
    try {
        const author = await Author.findOne({ name: name }).select('name');  // Seleccionamos solo el nombre y el id

        if (!author) {
            return null;  // Si no se encuentra la categoría, retornamos null
        }

        return {
            id: author._id.toString(),  // Convertimos el ObjectId a string
            name: author.name
        };
    } catch (error: any) {
        throw new Error(`Failed to fetch author by name: ${error.message || 'Unknown error'}`);
    }
};
