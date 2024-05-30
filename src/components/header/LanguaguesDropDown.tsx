import deFlag from '@/assets/de_flag.png';
import enFlag from '@/assets/en_flag.png';
import esFlag from '@/assets/es_flag.png';
import frFlag from '@/assets/fr_flag.png';
import nlFlag from '@/assets/nl_flag.png';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import LanguageItem from './LanguageItem';

export type Language = {
  name: string;
  flag: string;
  code: string;
};

const languages: Record<string, Language> = {
  en: {
    name: 'English',
    flag: enFlag,
    code: 'en',
  },
  fr: {
    name: 'Français',
    flag: frFlag,
    code: 'fr',
  },
  nl: {
    name: 'Nederlands',
    flag: nlFlag,
    code: 'nl',
  },
  es: {
    name: 'Español',
    flag: esFlag,
    code: 'es',
  },
  de: {
    name: 'Deutsch',
    flag: deFlag,
    code: 'de',
  },
};

const LanguaguesDropDown = () => {
  const [selectedLangaues, setSelectedLangaues] = useState(languages.en);

  const onLanguageChange = (lan: Language) => {
    setSelectedLangaues(lan);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-4" asChild>
        <img className="w-5 h-5" src={selectedLangaues.flag} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(languages).map((code) => (
          <LanguageItem
            key={code}
            language={languages[code]}
            onLanguageChange={onLanguageChange}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguaguesDropDown;
