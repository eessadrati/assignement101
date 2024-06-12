import Sites from '@/components/violations/Sites';
import ViolationsTable from '@/components/violations/ViolationsTable';
import ViolationsTopHeader from '@/components/violations/ViolationsTopHeader';
import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { ViolationType, getViolationsBySearchWorkers } from '@/lib/mockApi';
import { useSearchParams } from 'react-router-dom';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

const Violations = () => {
  const [searchWorkers, setSearchWorkers] = useState('');
  const [searchResults, setSearchResults] = useState<
    ViolationType[] | undefined
  >(undefined);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 6),
  });
  const debouncedSearchWorkers = useDebounce(searchWorkers, 500);
  const [searchParams] = useSearchParams();
  const siteParam = searchParams.get('site') || 'All';

  useEffect(() => {
    if (debouncedSearchWorkers) {
      //mock api
      const res = getViolationsBySearchWorkers(
        debouncedSearchWorkers,
        siteParam,
        date
      );
      setSearchResults(res);
    } else {
      setSearchResults(undefined);
    }
  }, [debouncedSearchWorkers, date, siteParam]);

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden">
      <Sites />
      <div className="bg-[#F2F2F2] overflow-auto pb-1 pt-7 md:pt-10 px-4 md:px-7  flex flex-col h-full w-full flex-1">
        <ViolationsTopHeader
          date={date}
          onDateChange={setDate}
          search={searchWorkers}
          onSearch={setSearchWorkers}
        />
        <ViolationsTable searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Violations;
