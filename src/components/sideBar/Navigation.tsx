import NavigationItem from './NavigationItem';
import { Separator } from '../ui/separator';
import { GiGloves } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdBriefcase } from 'react-icons/io';
import { HiHandRaised } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';

import { type IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';

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
    title: 'dashboard',
    path: '/',
    icon: AiOutlineHome,
  },
  {
    title: 'violations',
    path: '/PPE_violations',
    icon: HiHandRaised,
  },
];

const manageLinks: LinkType[] = [
  {
    title: 'PPEs',
    path: '/PPEs',
    icon: GiGloves,
  },
  {
    title: 'contractors',
    path: '/contractors',
    icon: IoMdBriefcase,
  },
  {
    title: 'workers',
    path: '/workers',
    icon: BsFillPersonFill,
  },
];

export function Navigation({ isCollapsed }: NavProps) {
  const { t } = useTranslation();

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
          <p className="text-xs my-2 font-medium text-[#B7B7B7]">{t('sideBar.manage')}</p>
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
