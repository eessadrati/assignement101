import { TableHead } from '@/components/ui/table';
import { Material } from './ViolationsTable';
import { useTranslation } from 'react-i18next';

type Props = {
  material: Material;
  selectedColumn: boolean;
};

const MaterialTableHead = ({ selectedColumn, material }: Props) => {
  const { t } = useTranslation();

  if (!selectedColumn) {
    return;
  }

  return (
    <TableHead className="justify-center px-12 py-2 border-none max-h-40 min-w-40">
      <div className="flex flex-col items-center justify-between flex-1 w-full h-full">
        <img
          className="flex-1 object-cover w-32 h-auto max-w-32"
          src={material.image}
        />
        <p className="py-1">{t(`materials.${material.name}`)}</p>
      </div>
    </TableHead>
  );
};

export default MaterialTableHead;
