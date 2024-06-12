import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useUser from '@/hooks/useUser';
import { ChevronDown, LogOut, Settings, ShieldAlert, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProfileDropDown = () => {
  const { t } = useTranslation();
  const user = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center h-full gap-2 hover:cursor-pointer hover:bg-gray-50/40">
          <Avatar className="w-8 h-8 hover:cursor-pointer">
            <AvatarImage src={user?.profile} alt={user?.name} />
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <p className="font-medium text-[13px] text-[#7A7A7A] hidden md:block">
            {user?.name}
          </p>
          <ChevronDown className="hidden w-5 h-5 md:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="px-4 py-1">
          <h3 className="text-xs font-semibold ">{user?.name}</h3>
          <p className="text-xs font-normal text-[#797979] ">{user?.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="w-5 h-5 mr-2" />
         {t('profileMenu.settings')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShieldAlert className="w-5 h-5 mr-2" />
          {t('profileMenu.policies')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-5 h-5 mr-2" />
          {t('profileMenu.logOut')}
         
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropDown;
