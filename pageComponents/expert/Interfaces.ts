enum DAY_PART {
  "PM" = "PM",
  "AM" = "AM",
}
export interface FreeTime {
  time: string;
  day_part: DAY_PART;
}
interface FREE_TIMES {
  [date: string]: { freeTimes: FreeTime[] };
}
export type { FREE_TIMES };
