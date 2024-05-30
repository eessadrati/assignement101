import {
  BriefcaseBusiness,
  Hand,
  Home,
  LifeBuoy,
  LucideIcon,
  User,
} from 'lucide-react';
import NavigationItem from './NavigationItem';
import { Separator } from '../ui/separator';

interface NavProps {
  isCollapsed: boolean;
}

/**
 *  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
  }[];
 */

export type LinkType = {
  title: string;
  path: string;
  icon: LucideIcon;
};

const mainLinks: LinkType[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: Home,
  },
  {
    title: 'P.P.E Violations',
    path: '/PPE_violations',
    icon: Hand,
  },
];

const manageLinks: LinkType[] = [
  {
    title: 'P.P.Es',
    path: '/PPEs',
    icon: LifeBuoy,
  },
  {
    title: 'Contractors',
    path: '/contractors',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Workers',
    path: '/workers',
    icon: User,
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
