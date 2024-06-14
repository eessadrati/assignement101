import { useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Navigation } from '@/components/sideBar/Navigation';
import { Button } from '@/components/ui/button';
import shortLogo from '@/assets/logo_short.png';
import logo from '@/assets/logo.png';
import { Menu } from 'lucide-react';

type Props = {
  onIsCollapsedChange: (val: boolean) => void;
  isCollapsed: boolean;
};

const SideBar = ({ onIsCollapsedChange, isCollapsed }: Props) => {
  const onCollapse = useCallback(() => {
    onIsCollapsedChange(true);
  }, [onIsCollapsedChange]);

  return (
    <div data-testid='sidebar'
      className={cn(
        'hidden lg:flex flex-col justify-between h-full transition-width duration-300 border-r lg:w-60',
        isCollapsed ? 'lg:w-16' : 'px-2'
      )}
    >
      <div>
        <div className="flex items-center justify-center h-14">
          {!isCollapsed && (
            <>
              <img className="flex-1 w-full h-10 m-1" src={logo} />
              <Button data-testid="collapse-btn" onClick={onCollapse} variant="ghost">
                <Menu className="w-5 h-5" />
              </Button>
            </>
          )}
          {isCollapsed && <img className="w-8 h-9" src={shortLogo} />}
        </div>
        <Navigation isCollapsed={isCollapsed} />
      </div>
      {!isCollapsed && (
        <div>
          <Separator className="mb-2" />
          <p className="font-medium text-[13px]  text-[#939393]">
            @ App name 2021
          </p>
          <p className="text-[11px] text-[#8a8a8a] p-1 leading-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      )}
    </div>
  );
};

export default SideBar;
