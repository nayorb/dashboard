import { TrackerConstants } from "../tracker-constants";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="h-10 w-full shadow-md rounded-full mt-2 overflow-hidden relative">
      <div
        className="h-full absolute top-0 left-0"
        style={{ backgroundColor: TrackerConstants.colors.blue.light, width: `${progress}%` }}
      />
      <div className="w-full h-full flex items-center justify-center z-10  absolute top-0 left-0 text-xs">
        Completed <span className="font-bold ml-1 text-base">{progress}</span>/100
      </div>
    </div>
  );
};

export default ProgressBar;
