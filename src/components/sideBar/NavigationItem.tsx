import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';
import { LinkType } from './Navigation';
import { useTranslation } from 'react-i18next';

type Props = {
  isCollapsed: boolean;
  link: LinkType;
};

const NavigationItem = ({ link, isCollapsed }: Props) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = pathname === link.path;
  const variant = isActive ? 'default' : 'ghost';

  if (isCollapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            to={link.path}
            className={cn(
              buttonVariants({ variant, size: 'icon' }),
              'h-8 w-8 bg-inherit hover:bg-inherit'
            )}
          >
            <link.icon
              className={cn(
                'w-5 h-5 text-[#C4C4C4] hover:text-primary',
                isActive && 'text-primary'
              )}
            />
            <span className="sr-only"> {t(`sideBar.${link.title}`)}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="flex items-center text-xs gap-4 bg-[#343434] text-white"
        >
          {t(`sideBar.${link.title}`)}
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Link
      to={link.path}
      className={cn(
        'text-[#626262] flex items-center font-normal text-[13px]',
        buttonVariants({ variant, size: 'sm' }),
        'justify-start'
      )}
    >
      <link.icon
        className={cn('w-5 h-5 mr-2 text-[#C4C4C4]', isActive && 'text-white')}
      />
      {t(`sideBar.${link.title}`)}
    </Link>
  );
};

export default NavigationItem;
