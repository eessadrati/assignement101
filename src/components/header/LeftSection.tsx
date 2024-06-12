import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  onIsCollapsedChange: (val: boolean) => void;
};

const LeftSection = ({ onIsCollapsedChange }: Props) => {
  const {t} =useTranslation()
  const onExpend = useCallback(() => {
    onIsCollapsedChange(false);
  }, [onIsCollapsedChange]);

  return (
    <div className="hidden lg:flex items-center gap-3 text-lg font-medium py-2.5">
      <Button onClick={onExpend} variant="ghost">
        <Menu className="w-5 h-5" />
      </Button>
      <p>{t('overview')}</p>
    </div>
  );
};

export default LeftSection;
