import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { addDays, format } from 'date-fns';
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

const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 6),
  });

  const onCancel = () => {
    setIsOpen(false);
  };

  const onApply = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-60 h-8 justify-between  font-normal',
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
              <span>Pick a date</span>
            )}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="mx-2 mt-2">
            <label className=" text-[#989797] text-xs">Date range</label>
            <Select value="Custom">
              <SelectTrigger className="w-[180px]  h-8">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
          />
          <div className="flex justify-end pr-3 my-1">
            <Button
              onClick={onCancel}
              variant="ghost"
              className="text-[#b6b6b6] text-sm"
            >
              Cancel
            </Button>
            <Button
              onClick={onApply}
              className="h-9 bg-[#37c34d] hover:bg-[#37c34d]/80"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
