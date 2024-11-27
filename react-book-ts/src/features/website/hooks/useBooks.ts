import { useState, useEffect } from 'react';
import { Book } from '../types/book';
import { getAllBooks } from '../services/book-service';

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks(); 
        setBooks(response.data);
      } catch (err) {
        setError('Error fetching the books');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useBooks;
