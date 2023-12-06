import Container from './components/layout/container';

import HashtagList from './components/hashtag/hashtag-list';
import { useEffect, useMemo, useState } from 'react';
import { TFeedbackItem } from './types/types';

export default function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const companyList = feedbackItems
    .map((item) => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index;
    });

  const handleSelectCompany = (company: string) => {
    setSelectedCompany((prev) => (prev === company ? '' : company));
  };

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

  const handleAddFeedbackItem = async (text: string) => {
    const company = text
      .split(' ')
      .find((word: string) => word.includes('#'))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: company,
      badgeLetter: company.substring(0, 1).toUpperCase(),
    };

    try {
      setFeedbackItems((prev) => [...prev, newItem]);

      await fetch(
        'http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
        {
          method: 'POST',
          body: JSON.stringify(newItem),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.log('error adding feedback item');
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-600 to-purple-500 h-screen pt-20 flex justify-center">
      <div className="flex justify-center h-full max-w-screen-lg">
        <Container
          handleAddFeedbackItem={handleAddFeedbackItem}
          isLoading={isLoading}
          error={error}
          feedbackItems={filteredFeedbackItems}
        />
        <HashtagList
          companyList={companyList}
          handleSelectCompany={handleSelectCompany}
          selectedCompany={selectedCompany}
        />
      </div>
    </div>
  );
}
