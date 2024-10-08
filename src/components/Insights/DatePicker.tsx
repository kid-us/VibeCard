import * as React from "react";
import { format, isAfter } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

function DatePicker({ className, date, setDate }: DatePickerProps) {
  const maxDate = new Date();

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "yyyy-MM-dd")} -{" "}
                  {format(date.to, "yyyy-MM-dd")}
                </>
              ) : (
                format(date.from, "yyyy-MM-dd")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => {
              if (
                newDate?.from &&
                isAfter(newDate.from, maxDate) &&
                newDate?.to &&
                isAfter(newDate.to, maxDate)
              ) {
                return;
              }
              setDate(newDate);
            }}
            numberOfMonths={1}
            disabled={{
              after: maxDate, // Disable all dates after today
            }}
            fromMonth={new Date(1970, 0)} // Allows viewing past months
            toMonth={maxDate} // Limits viewing up to the current month
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
