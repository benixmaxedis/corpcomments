import { TFeedbackItem } from '../../types/types';
import FeedbackList from '../feedback/feedback-list';
import Header from './header';

type ContainerProps = {
  handleAddFeedbackItem: (text: string) => void;
  isLoading: boolean;
  error: string;
  feedbackItems: TFeedbackItem[];
};

export default function Container({
  handleAddFeedbackItem,
  isLoading,
  error,
  feedbackItems,
}: ContainerProps) {
  return (
    <main className="bg-white flex-1 h-full shadow-md rounded-lg overflow-hidden ">
      <Header handleAddFeedbackItem={handleAddFeedbackItem} />
      <FeedbackList
        isLoading={isLoading}
        error={error}
        feedbackItems={feedbackItems}
      />
    </main>
  );
}
