import { ViolationInfo } from '@/lib/mockApi';
import { TableCell } from '../ui/table';
import ViolationInfoPopover from './ViolationInfoPopover';
import ViolationInfoMobileDrawer from './ViolationInfoMobileDrawer';

type Props = {
  selectedColumn: boolean;
  violationInfo: ViolationInfo[];
};

const ViolationsInfo = ({ violationInfo }: Props) => {
  return (
    <TableCell className="p-2">
      {violationInfo.length === 0 && (
        <p className="w-full h-full text-lg font-bold text-center text-[#C4C4C4]">
          -
        </p>
      )}

      {violationInfo.length > 0 && (
        <>
          <ViolationInfoPopover violationInfo={violationInfo} />
          <ViolationInfoMobileDrawer violationInfo={violationInfo} />
        </>
      )}
    </TableCell>
  );
};

export default ViolationsInfo;
