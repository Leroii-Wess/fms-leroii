import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { FC, useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";

interface SelectionRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const DateComp: FC = () => {
  const [openDate, setOpenDate] = useState<boolean>(false);

  const [selectionRange, setSelectionRange] = useState<SelectionRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setSelectionRange({
      ...selectionRange,
      startDate: selection.startDate,
      endDate: selection.endDate,
    });
    console.log(ranges);
  };

  const toggleDateOpen = () => {
    setOpenDate((open) => !open);
  };

  return (
    <div className="flex flex-col ">
      <label className="text-xl">From - To</label>
      <div className="relative border bg-gray-50 flex flex-col items-center justify-center p-2 rounded-md">
        <span onClick={toggleDateOpen} className="relative cursor-pointer">
          {`${format(selectionRange.startDate, "dd MMM, yyyy")} - ${format(
            selectionRange.endDate,
            "dd MMM, yyyy"
          )}`}
        </span>
        <div className="absolute top-full left-1 mt-2 z-10">
          {openDate && (
            <DateRangePicker
              className=""
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DateComp;
