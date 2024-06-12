import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ColumnsToggleItem from './ColumnsToggleItem';
import { Material } from './ViolationsTable';

type Props = {
  columns: Material[];
  onColumnsSelect: (checked: boolean, key: string) => void;
  selectedColumns: Record<string, boolean>;
};

const ColumnsToggle = ({
  onColumnsSelect,
  columns,
  selectedColumns,
}: Props) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="w-7 h-7">
          <Settings className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[162px]" align="start">
        <div className="font-medium text-[11px] text-[#989797] ml-2">Select columns to display</div>
        {columns.map((column) => (
          <ColumnsToggleItem
            key={column.name}
            onCheckedChange={onColumnsSelect}
            label={column.name}
            checked={selectedColumns[column.name]}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColumnsToggle;
