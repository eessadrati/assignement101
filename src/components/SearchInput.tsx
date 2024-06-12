import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useTranslation } from 'react-i18next';

type Props = {
  search: string;
  onSearch: (val: string) => void;
};
const SearchInput = ({ search, onSearch }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full md:w-60">
      <Input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full h-8 pl-7"
        placeholder={t(`searchWorkers`)}
      />
      <Search className="w-4 h-4 text-[#c8c8c8] absolute left-1 top-[50%] translate-y-[-50%]" />
    </div>
  );
};

export default SearchInput;
