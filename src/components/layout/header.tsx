import FeedbackForm from '../feedback/feedback-form';
import Logo from '../logo';
import PageHeading from '../page-heading';
import Pattern from '../pattern';

type HeaderProps = {
  handleAddFeedbackItem: (text: string) => void;
};

export default function Header({ handleAddFeedbackItem }: HeaderProps) {
  return (
    <header className="w-full bg-slate-900 shadow-lg flex flex-col justify-center items-center">
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddFeedbackItem={handleAddFeedbackItem} />
    </header>
  );
}
