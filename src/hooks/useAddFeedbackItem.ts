import { useState } from 'react';
import { TFeedbackItem } from '../types/types';

export function useAddFeedbackItem() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);

  const addFeedbackItem = (text: string) => {
    const company = text
      .split(' ')
      .find((word: string) => word.includes('#'))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company,
      badgeLetter: company.substring(0, 1).toUpperCase(),
    };

    try {
      setFeedbackItems((prev) => [...prev, newItem]);
      console.log(feedbackItems);
    } catch (error) {
      console.log('error adding feedback item');
    }
  };

  return { addFeedbackItem };
}
