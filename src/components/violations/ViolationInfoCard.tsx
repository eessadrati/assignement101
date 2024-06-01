import { ViolationInfo } from '@/lib/mockApi';
import { format } from 'date-fns';
import { Clock3 } from 'lucide-react';

type Props = {
  violation: ViolationInfo;
};

const ViolationInfoCard = ({ violation }: Props) => {
  return (
    <div className="my-2 border-b">
      <img className="object-cover" src={violation.image} />
      <div className="flex justify-between mt-1">
        <p className="text-xs text-[#929292]">Comment</p>
        <div className="flex items-center gap-1">
          <Clock3 className="w-3 h-3 text-[#F88923]" />
          <div className="font-medium text-[10px] text-[#727272] ">
            {format(violation.date, 'dd/MM/yyy HH:mm')}
          </div>
          <p className='text-xs font-medium'>{`#${violation.id}`}</p>
        </div>
      </div>
      <p className="text-[11px]  text-[#313131] leading-4 pb-1">{violation.comment}</p>
    </div>
  );
};

export default ViolationInfoCard;
