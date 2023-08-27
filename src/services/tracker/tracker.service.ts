import { todoistApi } from "../todoist/todoist.service";

export type TrackerDay = {
  youtubeCount: number;
};

const TASK_ID = "6825440050";

export type Tracker = Record<string, TrackerYear>;
export type TrackerYear = Record<string, TrackerDay>;

const TrackerService = {
  getTrackerData: async (): Promise<Tracker> => {
    const tasks = await todoistApi.getTasks({
      ids: [TASK_ID],
    });
    const task = tasks[0];
    const data = JSON.parse(task.description);
    return data;
  },
  getTrackerDataForYear: async (year: number): Promise<TrackerYear> => {
    console.log({
      year,
    });

    const tasks = await todoistApi.getTasks({
      ids: [TASK_ID],
    });
    const task = tasks[0];

    console.log({
      tasks,
      task,
    });

    const trackerData = await (async () => {
      try {
        const data = JSON.parse(task.description);
        const dataForYear = data[year];
        console.log({
          data,
          dataForYear,
        });
        if (!dataForYear) {
          data[year] = {};
          await todoistApi.updateTask(task.id, {
            description: JSON.stringify(data),
          });
          return {};
        }
        return dataForYear;
      } catch (e) {
        console.error(e);
        return {};
      }
    })();

    console.log({
      trackerData,
    });

    return trackerData;
  },
  adjustYoutubeCount: async (year: number, date: string, youtubeCount: number): Promise<TrackerYear> => {
    const tracker = await TrackerService.getTrackerData();
    tracker[year][date] = { youtubeCount };
    await todoistApi.updateTask(TASK_ID, {
      description: JSON.stringify(tracker),
    });
    return tracker[year];
  },
};

export default TrackerService;
