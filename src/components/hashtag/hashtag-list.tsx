import HashtagItem from './hastag-item';

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
  selectedCompany: string;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
  selectedCompany,
}: HashtagListProps) {
  return (
    <ul className="flex-none px-8 flex flex-col gap-3">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectCompany}
          selectedCompany={selectedCompany}
        />
      ))}
    </ul>
  );
}
