import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';
import { LinkType } from './Navigation';

type Props = {
  isCollapsed: boolean;
  link: LinkType;
};

const NavigationItem = ({ link, isCollapsed }: Props) => {
  const { pathname } = useLocation();
  const variant = pathname === link.path ? 'default' : 'ghost';

  if (isCollapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            to={link.path}
            className={cn(buttonVariants({ variant, size: 'icon' }), 'h-9 w-9')}
          >
            <link.icon className="w-4 h-4" />
            <span className="sr-only">{link.title}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="flex items-center text-xs gap-4 bg-[#343434] text-white"
        >
          {link.title}
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Link
      to={link.path}
      className={cn(
        'text-[#626262] font-normal text-[13px]',
        buttonVariants({ variant, size: 'sm' }),
        'justify-start'
      )}
    >
      <link.icon className="w-5 h-5 mr-2 " />
      {link.title}
    </Link>
  );
};

export default NavigationItem;
