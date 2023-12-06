import { TFeedbackItem } from '../../types/types';
import ErrorMessage from '../error-message';
import FeedbackItem from './feedback-item';
import Spinner from '../spinner';

type FeedbackListProps = {
  isLoading: boolean;
  error: string;
  feedbackItems: TFeedbackItem[];
};

export default function FeedbackList({
  isLoading,
  error,
  feedbackItems,
}: FeedbackListProps) {
  return (
    <ol className="px-3 overflow-y-scroll">
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
