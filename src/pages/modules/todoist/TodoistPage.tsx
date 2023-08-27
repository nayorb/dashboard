import React, { useEffect, useState } from "react";
import { todoistApi } from "../../../services/todoist/todoist.service";
import { Task } from "@doist/todoist-api-typescript";

export interface TodoistPageProps {}

const TodoistPage = ({}: TodoistPageProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const _tasks = await todoistApi.getTasks();
      setTasks(_tasks);
    })();
  }, []);

  return (
    <div>
      <h1 className="h-2">Todoist</h1>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} onClick={() => console.log(task)}>
            {task.id} -{">"} {task.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoistPage;
