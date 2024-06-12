import SearchInput from '@/components/SearchInput';
import DatePicker from '@/components/DatePicker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '@/components/ui/button';
import { Expand } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Props = {
  search: string;
  onSearch: (val: string) => void;
};

const ViolationsTopHeader = ({ search, onSearch }: Props) => {
  const {t} =useTranslation();

  return (
    <div className="flex flex-col flex-wrap justify-between mb-4 lg:items-center lg:flex-row">
      <h3 className="mb-2 text-base font-medium">{t('violationsPage.violationsTable')}</h3>
      <div className="flex flex-col gap-3 mr-2 md:items-center md:flex-row">
        <div className='flex flex-col gap-3 sm:flex-row'>
        <SearchInput search={search} onSearch={onSearch} />
        <DatePicker />
        </div>
        <div className='flex gap-3'>
          <Select value="All Contractors">
            <SelectTrigger disabled className="w-full md:w-[180px]  h-8">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All Contractors">{t('violationsPage.allContractors')}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button disabled size="icon" className="w-8 h-8 bg-white">
            <Expand className="w-5 h-5 text-[#c4c4c4]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViolationsTopHeader;
