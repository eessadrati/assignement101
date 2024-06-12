import { ViolationInfo } from '@/lib/mockApi';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { cn } from '@/lib/utils';
import ViolationInfoCard from './ViolationInfoCard';

type Props = {
  violationInfo: ViolationInfo[];
};
const ViolationInfoMobileDrawer = ({ violationInfo }: Props) => {
  const styles =
    violationInfo.length < 10
      ? 'bg-[#F8CC23] hover:bg-[#F8CC23]/70'
      : 'bg-[#EF3C3C] hover:bg-[#EF3C3C]/70 text-white';

  return (
    <div className="flex justify-center md:hidden ">
      <Drawer>
        <DrawerTrigger>
          <p
            className={cn(
              ' h-9 w-9 flex items-center justify-center rounded-full font-bold text-sm',
              styles
            )}
          >
            {violationInfo.length}
          </p>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80%] py-2 px-3 ">
          <div className='flex flex-col gap-2 overflow-auto'>
            {violationInfo.map((violation) => (
              <ViolationInfoCard key={violation.id} violation={violation} />
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ViolationInfoMobileDrawer;
