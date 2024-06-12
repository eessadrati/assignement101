import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Contractors = () => {
  const {t}=useTranslation()
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="mb-4 text-3xl font-medium">{t("pages.contractors")}</h1>
      <p className="my-2"> {t('pages.checkViolations')}</p>
      <Link to="/PPE_violations">
        <Button>{t('pages.goTo')}</Button>
      </Link>
    </div>
  );
};

export default Contractors;
