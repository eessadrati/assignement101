import Sites from '@/components/violations/Sites';
import ViolationsTable from '@/components/violations/ViolationsTable';
import ViolationsTopHeader from '@/components/violations/ViolationsTopHeader';
import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

const Violations = () => {
  const [searchWorkers, setSearchWorkers] = useState('');
  const debouncedSearchWorkers = useDebounce(searchWorkers, 500);

  useEffect(() => {
    if (debouncedSearchWorkers) {
      console.log('Searching for:', debouncedSearchWorkers);
    }
  }, [debouncedSearchWorkers]);

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden">
      <Sites />
      <div className="bg-[#F2F2F2] overflow-auto pb-1 pt-7 md:pt-10 px-4 md:px-7  flex flex-col h-full w-full flex-1">
        <ViolationsTopHeader
          search={searchWorkers}
          onSearch={setSearchWorkers}
        />
        <ViolationsTable />
      </div>
    </div>
  );
};

export default Violations;
