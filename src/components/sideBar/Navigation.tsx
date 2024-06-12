import NavigationItem from './NavigationItem';
import { Separator } from '../ui/separator';
import { GiGloves } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdBriefcase } from 'react-icons/io';
import { HiHandRaised } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';

import { type IconType } from 'react-icons';

interface NavProps {
  isCollapsed: boolean;
}

export type LinkType = {
  title: string;
  path: string;
  icon: IconType;
};

const mainLinks: LinkType[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: AiOutlineHome,
  },
  {
    title: 'P.P.E Violations',
    path: '/PPE_violations',
    icon: HiHandRaised,
  },
];

const manageLinks: LinkType[] = [
  {
    title: 'P.P.Es',
    path: '/PPEs',
    icon: GiGloves,
  },
  {
    title: 'Contractors',
    path: '/contractors',
    icon: IoMdBriefcase,
  },
  {
    title: 'Workers',
    path: '/workers',
    icon: BsFillPersonFill,
  },
];

export function Navigation({ isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="flex flex-col gap-4 py-2 group"
    >
      <nav className="grid  gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {mainLinks.map((link) => (
          <NavigationItem
            link={link}
            key={link.path}
            isCollapsed={isCollapsed}
          />
        ))}
        {isCollapsed && <Separator className="w-[65px] -mx-4 my-2" />}
        {!isCollapsed && (
          <p className="text-xs my-2 font-medium text-[#B7B7B7]">MANAGE</p>
        )}
        {manageLinks.map((link) => (
          <NavigationItem
            link={link}
            key={link.path}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>
    </div>
  );
}
