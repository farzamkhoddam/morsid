import { FreeTime, FREE_TIMES } from "./Interfaces";
import { format, utcToZonedTime } from "date-fns-tz";
import { datePattern } from "./consts";

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
  // const tommorow = new Date(today);
  // tommorow.setDate(tommorow.getDate());

  return (date: Date) => {
    return today.getTime() > date.getTime();
  };
}
function getFormatedZonedTime(timezone: string): string {
  const zonedDate = utcToZonedTime(new Date(), timezone);
  return format(zonedDate, datePattern, { timeZone: timezone });
}
function convertTimeToZonedTme(time: Date, timezone: string): string {
  const zonedDate = utcToZonedTime(time, timezone);
  return format(zonedDate, datePattern, { timeZone: timezone });
}
function getOneDayFromDayObject(
  datesWithFreetimes: FREE_TIMES,
  datePickerValue: string,
): FreeTime[] | undefined {
  const day: any = datePickerValue.split("T")[0];
  return datesWithFreetimes[day]?.freeTimes;
}
export {
  GetTimeArrray,
  GetDateFromReserveDate,
  disablePrevDates,
  getFormatedZonedTime,
  convertTimeToZonedTme,
  getOneDayFromDayObject,
};
