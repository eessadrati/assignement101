import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import ColumnsToggle from './ColumnsToggle';
import coverall from '@/assets/coverall.png';
import earProtection from '@/assets/ear_protection.png';
import faceShield from '@/assets/face_shield.png';
import hardHat from '@/assets/hard_hat.png';
import protectiveGloves from '@/assets/protective_gloves.png';
import safetyGlasses from '@/assets/safety_glasses.png';
import maskProtection from '@/assets/mask_protection.png';
import kneePads from '@/assets/knee_pads.png';
import safetyShoes from '@/assets/safety_shoes.png';
import hiVisJacket from '@/assets/hi_vis_jacket.png';
import safetyHarness from '@/assets/safety_harness.png';
import weldingHelmet from '@/assets/welding_helmet.png';
import { ViolationType, getViolations } from '@/lib/mockApi';
import { useSearchParams } from 'react-router-dom';
import ViolationTableRow from './ViolationTableRow';
import MaterialTableHead from './MaterialTableHead';

export type Material = {
  name: string;
  image: string;
};

type Props = {
  searchResults?: ViolationType[];
};

const materials: Material[] = [
  {
    name: 'Protective gloves',
    image: protectiveGloves,
  },
  {
    name: 'Safety glasses',
    image: safetyGlasses,
  },
  {
    name: 'Ear protection',
    image: earProtection,
  },
  {
    name: 'Mask protection',
    image: maskProtection,
  },
  {
    name: 'Knee pads',
    image: kneePads,
  },
  {
    name: 'Safety shoes',
    image: safetyShoes,
  },
  {
    name: 'Coverall',
    image: coverall,
  },
  {
    name: 'Hi-Vis Jacket',
    image: hiVisJacket,
  },
  {
    name: 'Safety Harness',
    image: safetyHarness,
  },
  {
    name: 'Face shield',
    image: faceShield,
  },
  {
    name: 'Hard Hat',
    image: hardHat,
  },
  {
    name: 'Welding helmet',
    image: weldingHelmet,
  },
];

const defaultColumns: Record<string, boolean> = {
  'Protective gloves': true,
  'Safety glasses': true,
  'Ear protection': true,
  'Mask protection': true,
  'Knee pads': true,
  'Safety shoes': true,
  'Coverall': true,
  'Hi-Vis Jacket': true,
  'Safety Harness': true,
  'Face shield': true,
  'Hard Hat': true,
  'Welding helmet': true,
};

const ViolationsTable = ({ searchResults }: Props) => {
  const [siteParam] = useSearchParams();
  const [selectedColumns, setSelectedColumns] = useState(defaultColumns);
  const [violations, setViolations] = useState<ViolationType[]>([]);

  useEffect(() => {
    const param = siteParam.get('site') || 'All';
    setViolations(searchResults ? searchResults : getViolations(param));
  }, [searchResults, siteParam]);

  const onColumnsSelect = (checked: boolean, key: string) => {
    setSelectedColumns({ ...selectedColumns, [key]: checked });
  };

  return (
    <Table className="w-full bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-8 px-2 ">
            <ColumnsToggle
              columns={materials}
              selectedColumns={selectedColumns}
              onColumnsSelect={onColumnsSelect}
            />
          </TableHead>
          <TableHead className="min-w-[245px] text-center">Workers</TableHead>
          {materials.map((material) => (
            <MaterialTableHead
              key={material.name}
              selectedColumn={selectedColumns[material.name]}
              material={material}
            />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {violations.length <= 0 && (
          <TableRow>
            <TableCell colSpan={4}>
              <div className="w-full text-[#b9b9b9]">no data to display</div>
            </TableCell>
          </TableRow>
        )}
        {violations.length > 0 &&
          violations.map((violation) => (
            <ViolationTableRow
              key={violation.id}
              materials={materials}
              selectedColumns={selectedColumns}
              violation={violation}
            />
          ))}
      </TableBody>
    </Table>
  );
};

export default ViolationsTable;
