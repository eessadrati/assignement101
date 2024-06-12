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
    <div className="flex items-center h-[27px] gap-2 ml-2">
      <Checkbox
        className="w-3.5 h-3.5"
        checked={checked}
        onCheckedChange={handleCheckedchange}
      />
      <label className=" text-[12px] text-[#313131]">{label}</label>
    </div>
  );
};

export default ColumnsToggleItem;
