import LeftSection from './LeftSection';
import RightSection from './RightSection';

type Props = {
  onOpenSideBar: (val: boolean) => void;
  openSideBar: boolean;
};

const Header = ({ onOpenSideBar, openSideBar }: Props) => {
  return (
    <header className="flex px-2 border-b md:px-6 h-14">
      {!openSideBar && <LeftSection onOpenSideBar={onOpenSideBar} />}
      <RightSection />
    </header>
  );
};

export default Header;
