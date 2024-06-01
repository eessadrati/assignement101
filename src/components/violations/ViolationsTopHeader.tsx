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

type Props = {
  search: string;
  onSearch: (val: string) => void;
};

const ViolationsTopHeader = ({ search, onSearch }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-base font-medium"> P.P.E Violations Table</h3>
      <div className="flex items-center gap-2 mr-2">
        <SearchInput search={search} onSearch={onSearch} />
        <DatePicker />
        <Select value="All Contractors">
          <SelectTrigger disabled className="w-[180px]  h-8">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All Contractors">All Contractors</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button disabled size="icon" className="w-8 h-8 bg-white">
          <Expand className="w-5 h-5 text-[#c4c4c4]" />
        </Button>
      </div>
    </div>
  );
};

export default ViolationsTopHeader;
