import workerProfile from '@/assets/worker.png';
import company from '@/assets/company.png';
import violationImage2 from '@/assets/violation2.png';
import violationImage1 from '@/assets/violation1.png';
import { DateRange } from 'react-day-picker';

export type ViolationInfo = {
  id: number;
  image: string;
  comment: string;
  date: Date;
};

export type ViolationType = {
  id: number;
  worker: {
    name: string;
    profile: string;
    role: string;
    company: string;
  };
  site: string;
  materials: Record<string, ViolationInfo[]>;
};

const violations: ViolationType[] = [
  {
    id: 1,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 1',
    materials: {
      'Protective gloves': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety glasses': [],
      'Ear protection': [],
      'Mask protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hi-Vis Jacket': [],
      'Safety Harness': [],
      'Face shield': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hard Hat': [],
      'Welding helmet': [],
    },
  },
  {
    id: 2,
    worker: {
      name: 'John Doe',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 2',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Ear protection': [],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
  {
    id: 3,
    worker: {
      name: 'John Doe',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 3',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [],
      'Ear protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 11,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
  {
    id: 4,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 4',
    materials: {
      'Protective gloves': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety glasses': [],
      'Ear protection': [],
      'Mask protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hi-Vis Jacket': [],
      'Safety Harness': [],
      'Face shield': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hard Hat': [],
      'Welding helmet': [],
    },
  },
  {
    id: 5,
    worker: {
      name: 'Jane Smith',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 5',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Ear protection': [],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
  {
    id: 6,
    worker: {
      name: 'Jane Smith',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 6',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [],
      'Ear protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 11,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },

  {
    id: 7,
    worker: {
      name: 'David Wilson',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 1',
    materials: {
      'Protective gloves': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety glasses': [],
      'Ear protection': [],
      'Mask protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hi-Vis Jacket': [],
      'Safety Harness': [],
      'Face shield': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hard Hat': [],
      'Welding helmet': [],
    },
  },
  {
    id: 8,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 2',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Ear protection': [],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
  {
    id: 9,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 3',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [],
      'Ear protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 11,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
  {
    id: 10,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 1',
    materials: {
      'Protective gloves': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety glasses': [],
      'Ear protection': [],
      'Mask protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hi-Vis Jacket': [],
      'Safety Harness': [],
      'Face shield': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Hard Hat': [],
      'Welding helmet': [],
    },
  },
  {
    id: 11,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 3',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Ear protection': [],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
  {
    id: 12,
    worker: {
      name: 'Blaise DEFLOO',
      profile: workerProfile,
      role: 'Manager',
      company: company,
    },
    site: 'Site 1',
    materials: {
      'Protective gloves': [],
      'Safety glasses': [],
      'Ear protection': [
        {
          id: 1,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 4,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 5,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 6,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 7,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 8,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 9,
          image: violationImage1,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 10,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 11,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Mask protection': [],
      'Knee pads': [],
      'Safety shoes': [],
      'Coverall': [],
      'Hi-Vis Jacket': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
      'Safety Harness': [],
      'Face shield': [],
      'Hard Hat': [],
      'Welding helmet': [
        {
          id: 1,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 2,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
        {
          id: 3,
          image: violationImage2,
          comment:
            'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
          date: new Date(2022, 10, 15, 10, 34),
        },
      ],
    },
  },
];

const getViolations = (param: string) => {
  if (param === 'All') {
    return violations;
  }

  return violations.filter((violation) => violation.site === param);
};

const getViolationsBySearchWorkers = (
  search: string,
  site: string,
  date: DateRange | undefined
) => {
  //assuming date affect the results
  if (site === 'All') {
    return violations.filter((v) => {
      return v.worker.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  return violations.filter((v) => {
    return (
      v.worker.name.toLowerCase().includes(search.toLowerCase()) &&
      v.site === site
    );
  });
};
export { getViolations, getViolationsBySearchWorkers };
