import { ViolationInfo } from '@/lib/mockApi';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ViolationInfoCard from './ViolationInfoCard';

type Props = {
  violationInfo: ViolationInfo[];
};

const ViolationInfoPopover = ({ violationInfo }: Props) => {
  const styles =
    violationInfo.length < 10
      ? 'bg-[#F8CC23] hover:bg-[#F8CC23]/70'
      : 'bg-[#EF3C3C] hover:bg-[#EF3C3C]/70 text-white';

  return (
    <div className="justify-center hidden md:flex">
      <Popover>
        <PopoverTrigger>
          <p
            className={cn(
              ' h-9 w-9 flex items-center justify-center rounded-full font-bold text-sm',
              styles
            )}
          >
            {violationInfo.length}
          </p>
        </PopoverTrigger>
        <PopoverContent className="w-[340px] p-2 overflow-auto h-[340px]">
          {violationInfo.map((violation) => (
            <ViolationInfoCard key={violation.id} violation={violation} />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ViolationInfoPopover;
