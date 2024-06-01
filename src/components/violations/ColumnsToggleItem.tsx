import { useCallback } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  checked: boolean;
  label: string;
  onCheckedChange: (checked: boolean, key: string) => void;
};

const ColumnsToggleItem = ({ checked, label, onCheckedChange }: Props) => {
  const handleCheckedchange = useCallback(
    (ch: boolean) => {
      onCheckedChange(ch, label);
    },
    [label, onCheckedChange]
  );

  return (
    <div className='flex items-center gap-2 mt-0.5'>
      <Checkbox checked={checked} onCheckedChange={handleCheckedchange} />
      <label className=' text-sm text-[#313131]'>{label}</label>
    </div>
  );
};

export default ColumnsToggleItem;
