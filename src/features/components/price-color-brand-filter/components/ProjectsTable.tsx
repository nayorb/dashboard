import React, { useEffect, useState } from "react";
import { Filter } from "../PriceColorBrandFilter";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Project, Task } from "@doist/todoist-api-typescript";
import { Box, Collapse, IconButton } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export interface ProjectsTableProps {
  filter: Filter;
  tasks: Task[];
  projects: Project[];
}

const Row = ({ project, projectTasks }: { project: Project; projectTasks: Task[] }) => {
  const [open, setOpen] = useState(false);

  const hasTasks = projectTasks.length > 0;

  return (
    <>
      <TableRow>
        <TableCell>
          {hasTasks && (
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          )}
        </TableCell>
        <TableCell>{project.id}</TableCell>
        <TableCell>{project.name}</TableCell>
        <TableCell align="right">{hasTasks && projectTasks.length.toString()}</TableCell>
      </TableRow>
      {hasTasks && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Content</TableCell>
                      <TableCell align="right">Labels</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {projectTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>{task.content}</TableCell>
                        <TableCell align="right">{task.labels.toString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const ProjectsTable = ({ filter, tasks, projects }: ProjectsTableProps) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <h1>Projects Table</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <Row
                project={project}
                key={project.id}
                projectTasks={tasks.filter((task) => task.projectId === project.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectsTable;
