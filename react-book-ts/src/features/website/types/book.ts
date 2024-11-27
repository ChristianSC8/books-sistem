export interface Book {
    _id: string;
    title: string;
    description?: string;
    image: string;
    author_ids: string[];
    category_ids: string[];
    language: string;
    type: string;
    pages: number;
    dimensions: string;
    publication_date: Date;
    price: number;
    discount: number;
    stock: number;
    state: 'available' | 'unavailable';
    reviews: string[];
    publisher: string;
}

export interface ApiResponse {
    data: Book[];  
    message: string; 
}
