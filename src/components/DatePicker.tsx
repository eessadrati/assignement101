import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { type Locale, format } from 'date-fns';
import { Calendar } from './ui/calendar';
import { DateRange } from 'react-day-picker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useTranslation } from 'react-i18next';
import { fr, es, de, enUS, nl } from 'date-fns/locale';

const dateLocales: Record<string, Locale> = {
  en: enUS,
  fr,
  es,
  de,
  nl,
};

type Props = {
  date: DateRange | undefined;
  onDateChange: (range: DateRange | undefined) => void;
};

const DatePicker = ({ date, onDateChange }: Props) => {
  const { t, i18n } = useTranslation();
  const [currDate, setCurrDate] = useState<DateRange | undefined>(date);
  const [isOpen, setIsOpen] = useState(false);

  const onCancel = () => {
    setIsOpen(false);
  };

  const onApply = () => {
    setIsOpen(false);
    onDateChange(currDate);
  };

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    setCurrDate(date);
  };

  return (
    <div className="grid gap-2">
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-full md:w-60 h-8 justify-between  font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'dd/MM/yyyy')} -{' '}
                  {format(date.to, 'dd/MM/yyyy')}
                </>
              ) : (
                format(date.from, 'dd/MM/yyyy')
              )
            ) : (
              <span>{t('pickDate')}</span>
            )}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="mx-2 mt-2">
            <label className=" text-[#989797] text-xs">{t('dateRange')}</label>
            <Select value="Custom">
              <SelectTrigger className="w-[180px]  h-8">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Custom">{t('custom')}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Calendar
            locale={dateLocales[i18n.language]}
            mode="range"
            defaultMonth={date?.from}
            selected={currDate}
            onSelect={setCurrDate}
          />
          <div className="flex justify-end pr-3 my-1">
            <Button
              onClick={onCancel}
              variant="ghost"
              className="text-[#b6b6b6] text-sm"
            >
              {t('cancel')}
            </Button>
            <Button
              onClick={onApply}
              className="h-9 bg-[#37c34d] hover:bg-[#37c34d]/80"
            >
              {t('apply')}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
