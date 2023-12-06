import { useState } from 'react';
import { MAX_CHARACTERS } from '../../lib/constants';

type FeedbackFormProps = {
  onAddFeedbackItem: (text: string) => void;
};

export default function FeedbackForm({ onAddFeedbackItem }: FeedbackFormProps) {
  const [text, setText] = useState('');
  const remainingCharacters = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.includes('#') === false && text.length >= 5)
      return alert('Please add a hashtag');
    onAddFeedbackItem(text);
    setText('');
  };

  return (
    <form
      className="w-[600px] px-4 bg-slate-800 rounded-lg my-6 pt-4 pb-2"
      onSubmit={handleSubmit}
    >
      <textarea
        value={text}
        onChange={handleChange}
        className="w-full h-24 px-3 py-2 bg-slate-800 resize-none focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-opacity-50 rounded-lg text-white/60"
        id="feedback-textarea"
        placeholder="Enter your feedback here, remember to #hashtag the company..."
        spellCheck={false}
      />

      <div className="flex justify-between items-center py-3">
        <p className="u-italic text-white/30 italic text-sm pl-3">
          {remainingCharacters}
        </p>
        <button className="px-4 py-1 mr-1 bg-white rounded-full font-semibold uppercase text-sm hover:bg-slate-200">
          Submit
        </button>
      </div>
    </form>
  );
}
