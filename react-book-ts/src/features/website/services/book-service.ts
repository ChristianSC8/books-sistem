import api from "@/utils/axios-config";
import { ApiResponse, Book } from "../types/book";
import axios from "axios";

export const getAllBooks = async (): Promise<ApiResponse> => {
    try {
        const response = await api.get<ApiResponse>('/api/v1/books');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        return { data: [], message: 'Error fetching books' };
    }
};

export const getBookById = async (id: string): Promise<{ data: Book }> => {
    try {
        const response = await api.get<{ data: Book }>(`/api/v1/book/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el libro por ID:', error);
        throw new Error('Error fetching book by ID');
    }
};

export const getRecommendationsById = async (id: string): Promise<ApiResponse> => {
    try {
        const response = await axios.get<ApiResponse>(`http://127.0.0.1:8000/recommendations/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener recomendaciones:', error);
        return { data: [], message: 'Error fetching recommendations by ID' };
    }
};