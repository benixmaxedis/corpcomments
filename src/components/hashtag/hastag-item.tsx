import clsx from 'clsx';

type HashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
  selectedCompany: string;
};

export default function HashtagItem({
  company,
  onSelectCompany,
  selectedCompany,
}: HashtagItemProps) {
  return (
    <li key={company}>
      <button
        onClick={() => onSelectCompany(company)}
        className={clsx(
          'bg-white/10 text-white/90 rounded-full px-3 py-1 text-sm',
          selectedCompany === company && 'bg-white/50'
        )}
      >
        #{company}
      </button>
    </li>
  );
}
