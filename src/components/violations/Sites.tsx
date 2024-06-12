import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sites = () => {
  const { t } = useTranslation();
  const [sites, setSites] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const siteParam = searchParams.get('site') || 'All';

  useEffect(() => {
    //mock api call
    setSites([
      'All',
      'Site 1',
      'Site 2',
      'Site 3',
      'Site 4',
      'Site 5',
      'Site 6',
    ]);
  }, []);

  const onSiteClick = (site: string) => {
    if (site === 'All') {
      setSearchParams();
      return;
    }
    setSearchParams(`site=${site}`);
  };

  return (
    <div className="flex items-center border-b">
      <p className="text-xs bg-[#FCFCFC] font-medium text-[#ADADAD] px-6 py-3.5  border-r mr-1">
        {t('violationsPage.sites')}
      </p>
      <div className="flex overflow-auto ">
        {sites.map((site) => (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSiteClick(site)}
            className={cn(
              'text-xs font-medium text-[#ADADAD] px-3 mx-1 py-2.5 my-1 h-auto',
              siteParam === site && 'text-primary hover:text-primary/60'
            )}
            key={site}
          >
            {site}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sites;
