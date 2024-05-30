import MobileNavigation from '../sideBar/MobileNavigation';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

type Props = {
  onIsCollapsedChange: (val: boolean) => void;
  isCollapsed: boolean;
};

const Header = ({ onIsCollapsedChange, isCollapsed }: Props) => {
  return (
    <header className="flex px-2 border-b md:pl-3 md:pr-6 h-14">
      <MobileNavigation />
      {isCollapsed && <LeftSection onIsCollapsedChange={onIsCollapsedChange} />}
      <RightSection />
    </header>
  );
};

export default Header;
