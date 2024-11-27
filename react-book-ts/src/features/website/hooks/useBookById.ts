import { useState, useEffect } from 'react';
import { Book } from '../types/book';
import { getBookById } from '../services/book-service'; 

interface UseBookByIdProps {
  id?: string;
}

const useBookById = ({ id }: UseBookByIdProps) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookById = async () => {
      if (!id) {
        setError('Book ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await getBookById(id);
        setBook(response.data);
      } catch (err) {
        setError('Error fetching the book details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookById();
  }, [id]);

  return { book, loading, error };
};

export default useBookById;







// import { useState, useEffect } from 'react';





// import { Book } from '../types/book';
// import { getBookById } from '../services/book-service'; 

// interface UseBookByIdProps {
//   id: string;
// }

// const useBookById = ({ id }: UseBookByIdProps) => {
//   const [book, setBook] = useState<Book | null>(null); 
//   const [loading, setLoading] = useState<boolean>(true); 
//   const [error, setError] = useState<string | null>(null); 

//   useEffect(() => {
//     const fetchBookById = async () => {
//       try {
//         setLoading(true); 
//         const response = await getBookById(id);
//         setBook(response.data); 
//       } catch (err) {
//         setError('Error fetching the book details'); 
//         console.error(err); 
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBookById(); 
//     }
//   }, [id]); 

//   return { book, loading, error }; 
// };

// export default useBookById;
