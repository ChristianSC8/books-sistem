import { useState, useEffect } from 'react';
import { getRecommendationsById } from '../services/book-service';
import { Book } from '../types/book';

interface UseRecommendationsByIdProps {
  id?: string;
}

const useRecommendationsById = ({ id }: UseRecommendationsByIdProps) => {
  const [recommendations, setRecommendations] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendationsById = async () => {
      if (!id) {
        setError('Recommendation ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await getRecommendationsById(id);
        setRecommendations(response.data);
      } catch (err) {
        setError('Error fetching recommendations');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendationsById();
  }, [id]);

  return { recommendations, loading, error };
};

export default useRecommendationsById;
