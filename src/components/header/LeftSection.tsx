import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { useCallback } from 'react';

type Props = {
  onOpenSideBar: (val: boolean) => void;
};

const LeftSection = ({ onOpenSideBar }: Props) => {
  const handleOpenSideBar = useCallback(() => {
    onOpenSideBar(true);
  }, [onOpenSideBar]);

  return (
    <div className="flex items-center gap-3 text-lg font-medium py-2.5">
      <Button onClick={handleOpenSideBar} variant="ghost">
        <Menu className="w-5 h-5" />
      </Button>
      <p className="hidden md:block">Overview</p>
    </div>
  );
};

export default LeftSection;
