import { useState, useEffect } from 'react';
import { TFeedbackItem } from '../types/types';

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          'http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );
        const data = await res.json();

        if (!res.ok) throw new Error();

        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setError('Something went wrong retrieving feedback data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbackData();
  }, []);

  return { feedbackItems, setFeedbackItems, isLoading, error };
}
