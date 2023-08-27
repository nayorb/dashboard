import React, { useEffect, useState } from "react";
import { todoistApi } from "../services/todoist/todoist.service";

export interface Table {
  url: string;
  img?: string;
  name?: string;
}

const TABLES_PROJECT_ID = "2311475021";

const Tile = ({ table }: { table: Table }) => {
  return (
    <a
      href={table.url}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="bg-amber-600"
        style={{
          wordWrap: "break-word",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${table.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {table.name}
      </div>
    </a>
  );
};

const LivingRoomTablePage = () => {
  const [tables, setTables] = useState<Table[]>([]);

  const fetchTables = async () => {
    const response = await todoistApi.getTasks({
      projectId: TABLES_PROJECT_ID,
    });
    const tasks = response;

    const tables = tasks.map((task) => {
      return JSON.parse(task.content);
    });

    setTables(tables);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <div>
      <h1>Living Room Table</h1>
      <p>
        <button onClick={fetchTables}>Refresh</button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridAutoRows: "minmax(300px, 1fr)",
            gap: "1rem",
          }}
        >
          {tables.map((table) => {
            return <Tile key={table.url} table={table} />;
          })}
        </div>
      </p>
    </div>
  );
};

export default LivingRoomTablePage;
