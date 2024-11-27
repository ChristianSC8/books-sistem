import Category, { ICategory } from '../models/category-model';

export const getAllCategories = async () => {
    try {
        return await Category.find();
    } catch (error: any) {
        throw new Error(`Failed to fetch categories: ${error.message || 'Unknown error'}`);
    }
};

export const getCategoryById = async (id: string): Promise<ICategory | null> => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    } catch (error: any) {
        throw new Error(`Failed to get category: ${error.message || 'Unknown error'}`);
    }
};

export const createCategory = async (data: ICategory): Promise<ICategory | null> => {
    try {
        const newCategory = new Category(data);
        return await newCategory.save();
    } catch (error: any) {
        throw new Error(`Failed to create category: ${error.message || 'Unknown error'}`);
    }
};



export const updateCategory = async (id: string, data: ICategory): Promise<ICategory | null> => {
    try {
        const existingCategory = await Category.findById(id);
        if (!existingCategory) {
            return null
        }
        return await Category.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
    } catch (error: any) {
        throw new Error(`Failed to update category: ${error.message || 'Unknown error'}`);
    }
};

export const deleteCategory = async (id: string): Promise<boolean> => {
    try {
        const result = await Category.findByIdAndDelete(id);
        if (!result) {
            return false;
        }
        return true;
    } catch (error: any) {
        throw new Error(`Failed to delete category ${error.message || 'Unknown error'}`);
    }
};

// ---------------------------------------------------

export const getCategoryByName = async (name: string): Promise<{ id: string, name: string } | null> => {
    try {
        const category = await Category.findOne({ name: name }).select('name');  // Seleccionamos solo el nombre y el id

        if (!category) {
            return null;  // Si no se encuentra la categoría, retornamos null
        }

        return {
            id: category._id.toString(),  // Convertimos el ObjectId a string
            name: category.name
        };
    } catch (error: any) {
        throw new Error(`Failed to fetch category by name: ${error.message || 'Unknown error'}`);
    }
};
