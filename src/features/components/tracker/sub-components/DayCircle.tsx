import { TrackerConstants } from "../tracker-constants";

export interface DayCircleProps {
  date: Date;
  completed: boolean;
  onClick: () => void;
}

enum DayCircleState {
  completedPast = "completedPast",
  completedToday = "completedToday",
  idlePast = "idlePast",
  inCompletionToday = "inCompletionToday",
  future = "future",
}

const getBackgroundColor = (dayCircleState: DayCircleState): string => {
  switch (dayCircleState) {
    case DayCircleState.completedPast:
      return TrackerConstants.colors.blue.light;
    case DayCircleState.completedToday:
      return TrackerConstants.colors.blue.main;
    case DayCircleState.idlePast:
      return TrackerConstants.colors.common.white;
    case DayCircleState.inCompletionToday:
      return TrackerConstants.colors.common.white;
    case DayCircleState.future:
      return TrackerConstants.colors.common.white;
  }
};

const getTextColor = (dayCircleState: DayCircleState): string => {
  switch (dayCircleState) {
    case DayCircleState.completedPast:
      return TrackerConstants.colors.common.black;
    case DayCircleState.completedToday:
      return TrackerConstants.colors.common.white;
    case DayCircleState.idlePast:
      return TrackerConstants.colors.common.black;
    case DayCircleState.inCompletionToday:
      return TrackerConstants.colors.common.black;
    case DayCircleState.future:
      return TrackerConstants.colors.common.black;
  }
};

const getBorder = (dayCircleState: DayCircleState): string => {
  switch (dayCircleState) {
    case DayCircleState.completedPast:
      return "none";
    case DayCircleState.completedToday:
      return `3px solid ${TrackerConstants.colors.blue.main}`;
    case DayCircleState.inCompletionToday:
      return `3px solid ${TrackerConstants.colors.blue.main}`;
    case DayCircleState.idlePast:
      return `1px solid ${TrackerConstants.colors.common.gray}`;
    case DayCircleState.future:
      return "none";
  }
};

const getCircleSize = (dayCircleState: DayCircleState): string => {
  switch (dayCircleState) {
    case DayCircleState.completedPast:
    case DayCircleState.idlePast:
    case DayCircleState.future:
      return "w-7 h-7";
    case DayCircleState.completedToday:
    case DayCircleState.inCompletionToday:
      return "w-8 h-8";
  }
};

const getDayCircleState = (date: Date, completed: boolean): DayCircleState => {
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();

  const isFuture =
    dateYear > todayYear ||
    (dateYear === todayYear && dateMonth > todayMonth) ||
    (dateYear === todayYear && dateMonth === todayMonth && dateDate > todayDate);
  const isToday = dateYear === todayYear && dateMonth === todayMonth && dateDate === todayDate;
  const isPast = !isFuture && !isToday;

  if (isFuture) {
    return DayCircleState.future;
  } else if (isToday) {
    if (completed) {
      return DayCircleState.completedToday;
    } else {
      return DayCircleState.inCompletionToday;
    }
  } else if (isPast) {
    if (completed) {
      return DayCircleState.completedPast;
    } else {
      return DayCircleState.idlePast;
    }
  }

  throw new Error("Invalid date");
};

const DayCircle = ({ date, completed, onClick }: DayCircleProps) => {
  const { day, year, month } = { day: date.getDate(), year: date.getFullYear(), month: date.getMonth() };

  const dayCircleState = getDayCircleState(date, completed);

  return (
    <div
      className={`rounded-full flex justify-center items-center ${getCircleSize(
        dayCircleState,
      )} m-1 cursor-pointer font-light text-xs`}
      style={{
        backgroundColor: getBackgroundColor(dayCircleState),
        color: getTextColor(dayCircleState),
        border: getBorder(dayCircleState),
      }}
      onClick={onClick}
    >
      {day}
    </div>
  );
};

export default DayCircle;
