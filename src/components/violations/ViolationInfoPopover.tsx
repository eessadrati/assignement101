import { ViolationInfo } from '@/lib/mockApi';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TableCell } from '@/components/ui/table';
import ViolationInfoCard from './ViolationInfoCard';

type Props = {
  selectedColumn: boolean;
  violationInfo: ViolationInfo[];
};

const ViolationInfoPopover = ({ selectedColumn, violationInfo }: Props) => {
  if (!selectedColumn) {
    return;
  }

  const styles =
    violationInfo.length < 10
      ? 'bg-[#F8CC23] hover:bg-[#F8CC23]/70'
      : 'bg-[#EF3C3C] hover:bg-[#EF3C3C]/70 text-white';

  return (
    <TableCell className="p-2">
      {violationInfo.length === 0 && (
        <p className="w-full h-full text-lg font-bold text-center text-[#C4C4C4]">
          -
        </p>
      )}

      {violationInfo.length > 0 && (
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger className="">
              <p
                className={cn(
                  ' h-9 w-9 flex items-center justify-center rounded-full font-bold text-sm',
                  styles
                )}
              >
                {violationInfo.length}
              </p>
            </PopoverTrigger>
            <PopoverContent className="w-[340px] p-2 pb-12 overflow-auto h-[340px]">
              {violationInfo.map((violation) => (
                <ViolationInfoCard key={violation.id} violation={violation} />
              ))}
            </PopoverContent>
          </Popover>
        </div>
      )}
    </TableCell>
  );
};

export default ViolationInfoPopover;
