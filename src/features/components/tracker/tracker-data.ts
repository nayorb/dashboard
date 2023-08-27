interface Day {
  date: Date;
  completed: boolean;
}

const getCompletedRandomly = (day: number): boolean => {
  if (Math.random() > 0.5) {
    return true;
  }
  return false;
};

const getMonthDays = (month: number, year: number): Day[] => {
  const days = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push({
      date: new Date(date),
      completed: getCompletedRandomly(date.getDate()),
    });
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const TrackerData = {
  0: getMonthDays(0, 2023),
  1: getMonthDays(1, 2023),
  2: getMonthDays(2, 2023),
  3: getMonthDays(3, 2023),
  4: getMonthDays(4, 2023),
  5: getMonthDays(5, 2023),
  6: getMonthDays(6, 2023),
  7: getMonthDays(7, 2023),
  8: getMonthDays(8, 2023),
  9: getMonthDays(9, 2023),
  10: getMonthDays(10, 2023),
  11: getMonthDays(11, 2023),
};

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export const getCompleted = (date: Date): boolean => {
  const month = date.getMonth();
  const day = date.getDate();
  return TrackerData[month as Month][day - 1].completed;
};

console.log("TrackerData", TrackerData);
