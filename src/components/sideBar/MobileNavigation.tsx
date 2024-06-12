import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Navigation } from './Navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo.png';

const MobileNavigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="border-none shrink-0">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col max-w-64">
          <img className="w-48 h-10" src={logo} />
          <Navigation isCollapsed={false} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
