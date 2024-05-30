import { ALargeSmall, Bell, Moon } from 'lucide-react';
import ProfileDropDown from './ProfileDropDown';
import { Button } from '../ui/button';
import LanguaguesDropDown from './LanguaguesDropDown';

const RightSection = () => {
  return (
    <div className="flex items-center justify-end flex-1 gap-3">
      <Button disabled size="icon" variant="ghost">
        <ALargeSmall className="w-[18px] h-[18px]" />
      </Button>
      <Button disabled size="icon" variant="ghost">
        <Moon className="w-[18px] h-[18px]" />
      </Button>
      <Button disabled size="icon" variant="ghost">
        <Bell className="w-[18px] h-[18px]" />
      </Button>
      <LanguaguesDropDown />
      <ProfileDropDown />
    </div>
  );
};

export default RightSection;
