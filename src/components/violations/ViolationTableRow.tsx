import { ViolationType } from '../../lib/mockApi';
import { TableCell, TableRow } from '../ui/table';
import ViolationsInfo from './ViolationInfo';
import { Material } from './ViolationsTable';

type Props = {
  violation: ViolationType;
  materials: Material[];
  selectedColumns: Record<string, boolean>;
};

const ViolationTableRow = ({
  selectedColumns,
  violation,
  materials,
}: Props) => {
  return (
    <TableRow>
      <TableCell className="text-sm font-medium border text-[#909090]">
        {violation.id}
      </TableCell>
      <TableCell className="flex justify-between p-2 border-r">
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full"
            src={violation.worker.profile}
            alt={violation.worker.name}
          />
          <div className="flex flex-col justify-center ml-1 leading-snug">
            <p className="text-xs">{violation.worker.name}</p>
            <p className="text-[11px] text-[#909090]">
              {violation.worker.role}
            </p>
          </div>
        </div>
        <img className="w-10 h-10 " src={violation.worker.company} />
      </TableCell>
      {materials.map((material) => (
        <ViolationsInfo
          key={material.name}
          selectedColumn={selectedColumns[material.name]}
          violationInfo={violation.materials[material.name]}
        />
      ))}
    </TableRow>
  );
};

export default ViolationTableRow;
