import { FreeTime } from "./Interfaces";

const GetTimeArrray = (_blocks: FreeTime[], time: "AM" | "PM"): string[] => {
  const arr: string[] = [];
  if (_blocks)
    _blocks.map((date: FreeTime) => {
      if (date.day_part === time) arr[arr.length] = date.time;
    });

  return arr;
};
const GetDateFromReserveDate = (reserveDate: string | null): string => {
  if (!reserveDate) return "";
  const split = reserveDate.split(" ");
  return split[1];
};
function disablePrevDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (date: Date) => {
    return tomorrow.getTime() > date.getTime();
  };
}

export { GetTimeArrray, GetDateFromReserveDate, disablePrevDates };
