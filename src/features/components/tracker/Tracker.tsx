import DayCircle from "./sub-components/DayCircle";
import { getCompleted } from "./tracker-data";
import { TrackerConstants } from "./tracker-constants";
import ProgressBar from "./sub-components/ProgressBar";
import { ReactNode, useState } from "react";

const getThisMonthDatesStartMonday = (): Date[] => {
  const today = new Date();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();
  const firstDayOfMonth = new Date(thisYear, thisMonth, 1);
  const firstDayOfMonthDay = firstDayOfMonth.getDay();
  const firstDayOfMonthDate = firstDayOfMonth.getDate();
  const firstDayOfMonthMonday = new Date(thisYear, thisMonth, firstDayOfMonthDate - firstDayOfMonthDay + 1);
  const dates = [firstDayOfMonthMonday];
  for (let i = 0; i < 34; i++) {
    const date = new Date(dates[i].getTime());
    date.setDate(date.getDate() + 1);
    dates.push(date);
  }
  return dates;
};

const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const getDayOfWeek = (date: Date): string => {
  const day = date.getDay() - 1;
  return DAYS_OF_WEEK[day];
};

const getRandomProgress = (): number => {
  return Math.floor(Math.random() * 100);
};

const Tracker = () => {
  const [selectedDateProgress, setSelectedDateProgress] = useState(getRandomProgress());

  return (
    <div className="w-80 rounded-3xl shadow-2xl p-6 bg-white">
      <h1>Tracker</h1>
      <div className="grid grid-cols-7 grid-rows-5 items-center justify-items-center">
        {DAYS_OF_WEEK.map((day) => (
          <div
            className={`text-xs font-bold`}
            style={{
              color:
                getDayOfWeek(new Date()) === day
                  ? TrackerConstants.colors.common.black
                  : TrackerConstants.colors.common.gray,
            }}
          >
            {day}
          </div>
        ))}
        {getThisMonthDatesStartMonday().map((date) => (
          <DayCircle
            date={date}
            completed={getCompleted(date)}
            onClick={() => {
              setSelectedDateProgress(getRandomProgress());
            }}
          />
        ))}
      </div>
      <ProgressBar progress={selectedDateProgress} />
    </div>
  );
};

export default Tracker;
