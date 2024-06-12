import { useCallback } from 'react';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Language } from './LanguaguesDropDown';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

type Props = {
  language: Language;
  onLanguageChange: (lang: Language) => void;
};

const LanguageItem = ({ language, onLanguageChange }: Props) => {
  const { i18n } = useTranslation();
  const isActive = i18n.language === language.code;
  const handleLanguageChange = useCallback(
    () => onLanguageChange(language),
    [language, onLanguageChange]
  );

  return (
    <DropdownMenuItem
      className={cn('text-sm text-[#ADADAD]', isActive && ' text-[#313131]')}
      onClick={handleLanguageChange}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="object-contain w-5 h-5" src={language.flag} />
        <span>{`${language.name} (${language.code.toUpperCase()})`}</span>
      </div>
    </DropdownMenuItem>
  );
};

export default LanguageItem;
