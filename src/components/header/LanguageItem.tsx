import { useCallback } from 'react';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { Language } from './LanguaguesDropDown';

type Props = {
  language: Language;
  onLanguageChange: (lang: Language) => void;
};

const LanguageItem = ({ language, onLanguageChange }: Props) => {
  const handleLanguageChange = useCallback(
    () => onLanguageChange(language),
    [language, onLanguageChange]
  );

  return (
    <DropdownMenuItem
      className="text-sm text-[#ADADAD]"
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
