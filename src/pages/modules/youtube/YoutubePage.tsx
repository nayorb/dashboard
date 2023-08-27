import React, { useEffect } from "react";
import TrackerService, { TrackerYear } from "../../../services/tracker/tracker.service";

export interface YoutubePageProps {}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getMonthName = (month: number) => {
  return months[month - 1];
};

const getWeekDayName = (day: number) => {
  return weekDays[day];
};

const isWeekend = (day: number) => {
  return day === 6 || day === 0;
};

const getDataFromDate = (date: string) => {
  const parts = date.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  const dateObj = new Date(year, month - 1, day);
  const weekDay = dateObj.getDay();
  const weekDayName = getWeekDayName(weekDay);

  return {
    year,
    month,
    day,
    weekDay,
    weekDayName,
    isWeekend: isWeekend(weekDay),
    displayDate: `${day}`,
  };
};

const getDayCardBackground = (data: any) => {
  if (data.isWeekend) {
    return "bg-gray-300";
  }
  return "bg-green-300";
};

interface MonthData {
  month: number;
  days: string[];
}
interface YearData {
  months: MonthData[];
}

const getYearData = (year: number): YearData => {
  const yearData: YearData = {
    months: [],
  };
  for (let month = 1; month <= 12; month++) {
    const monthData: MonthData = {
      month,
      days: [],
    };
    const lastDay = new Date(year, month, 0).getDate();
    for (let day = 1; day <= lastDay; day++) {
      const dateString = `${year}-${month}-${day}`;
      monthData.days.push(dateString);
    }
    yearData.months.push(monthData);
  }
  return yearData;
};

const YoutubePage = ({}: YoutubePageProps) => {
  const [trackerData, setTrackerData] = React.useState<TrackerYear>({});

  useEffect(() => {
    TrackerService.getTrackerDataForYear(2023).then((data) => {
      setTrackerData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="p-8">
      <div className="">Youtube tracker</div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
        }}
      >
        <div className="col-span-1">
          <div className="text-center">Day</div>
          {new Array(31).fill(0).map((_, index) => (
            <div className={`flex items-center justify-center text-5xl bg-blue-300 m-1 rounded-2xl h-24`}>
              {index + 1}
            </div>
          ))}
        </div>
        {getYearData(2023).months.map((month) => (
          <div className="col-span-1">
            <div className="text-center">{getMonthName(month.month)}</div>
            {month.days.map((day) => {
              const dayData = getDataFromDate(day);
              const trackerDay = trackerData[day] || { youtubeCount: 0 };
              const dots = new Array(trackerDay.youtubeCount).fill(0);
              return (
                <div
                  className={`text-center ${getDayCardBackground(
                    dayData,
                  )} m-1 rounded-2xl px-2 py-5 relative h-24 cursor-pointer`}
                  onClick={() => {
                    TrackerService.adjustYoutubeCount(2023, day, trackerDay.youtubeCount + 1).then((data) => {
                      setTrackerData(data);
                    });
                  }}
                >
                  <div className="absolute left-2 top-1 text-xs font-bold text-black">{dayData.weekDayName}</div>
                  <div className="absolute right-2 top-1 text-xs font-bold text-black">{dayData.displayDate}</div>
                  <div className="grid grid-cols-5 w-16">
                    {dots.map(() => (
                      <div className="w-2 h-2 bg-red-700 rounded-full my-0.5"></div>
                    ))}
                  </div>
                  <div
                    className="text-xs absolute right-2 bottom-1 font-bold hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      const count = trackerDay.youtubeCount;

                      if (count === 0) {
                        return;
                      }

                      TrackerService.adjustYoutubeCount(2023, day, count - 1).then((data) => {
                        setTrackerData(data);
                      });
                    }}
                  >
                    {trackerDay.youtubeCount}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubePage;
