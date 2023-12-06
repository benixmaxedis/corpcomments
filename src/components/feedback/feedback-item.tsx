import { useState } from 'react';
import { TriangleUpIcon } from '@radix-ui/react-icons';
import { TFeedbackItem } from '../../types/types';

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: { upvoteCount, badgeLetter, company, text, daysAgo },
}: FeedbackItemProps) {
  const [upvoteCountState, setUpvoteStateCount] = useState(upvoteCount);

  const handleUpvoteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpvoteStateCount((prev) => prev + 1);
    e.stopPropagation();
    e.currentTarget.disabled = true;
  };

  return (
    <li className="flex py-3 justify-around gap-4 items-center border-b px-4 ">
      <button
        onClick={handleUpvoteClick}
        className="text-gray-400 flex flex-col items-center "
      >
        <TriangleUpIcon />
        <span className="text-xs text-gray-400">{upvoteCountState}</span>
      </button>
      <div className="flex justify-center items-center">
        <p className="bg-purple-800 text-white font-extrabold text-3xl px-4 py-2 rounded-md">
          {badgeLetter}
        </p>
      </div>
      <div className="text-xs flex flex-col justify-center w-[600px]">
        <p className="text-slate-400 uppercase font-semibold tracking-wider">
          {company}
        </p>
        <p>{text}</p>
      </div>

      <p className="text-xs text-slate-400">
        {daysAgo === 0 ? 'NEW' : `${daysAgo}d`}
      </p>
    </li>
  );
}
