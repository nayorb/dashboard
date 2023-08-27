import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Tabs,
  Tab,
  ThemeProvider,
  Box,
} from "@mui/material";
import theme from "./theme";
import LabelsFilter from "./components/LabelsFilter";
import { Project, Task } from "@doist/todoist-api-typescript";
import { todoistApi } from "../../../services/todoist/todoist.service";
import ProjectsFilter from "./components/ProjectsFilter";
import ProjectsTable from "./components/ProjectsTable";

export interface Filter {
  labels: Record<string, boolean>;
  project: string | null;
  date: Date | null;
}

const PriceColorBrandFilter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState<Filter>({
    labels: {},
    project: null,
    date: null,
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    todoistApi.getTasks().then((tasks) => {
      setTasks(tasks);
    });

    todoistApi.getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleLabelClick = (label: string) => {
    setFilter({
      ...filter,
      labels: {
        ...filter.labels,
        [label]: !filter.labels[label],
      },
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter.project && task.projectId !== filter.project) {
      return false;
    }

    if (Object.keys(filter.labels).length > 0) {
      const taskLabels = task.labels.map((label) => label.toString());
      const selectedLabels = Object.keys(filter.labels).filter((label) => filter.labels[label]);
      const hasLabel = selectedLabels.some((label) => taskLabels.includes(label));
      if (!hasLabel) {
        return false;
      }
    }

    return true;
  });

  const handleProjectClick = (projectId: string) => {
    setFilter({
      ...filter,
      project: projectId,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>PriceColorBrandFilter</Button>
      {/*<div>*/}
      {/*  {filteredTasks.map((task) => (*/}
      {/*    <div key={task.id}>{task.content}</div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <ProjectsTable filter={filter} tasks={tasks} projects={projects} />
      <Dialog open={isOpened} onClose={handleClose} fullWidth>
        <DialogTitle>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Labels Filter" id="labels" disableRipple />
            <Tab label="Projects Filter" id="projects" disableRipple />
            <Tab label="Date Filter" id="date" disableRipple />
          </Tabs>
        </DialogTitle>
        <DialogContent>
          <Box mt={2}>
            {value === 0 && (
              <LabelsFilter
                selectedLabels={filter.labels}
                onLabelClick={(label: string) => {
                  handleLabelClick(label);
                }}
                onClear={() => {
                  setFilter({
                    ...filter,
                    labels: {},
                  });
                }}
              />
            )}
            {value === 1 && (
              <ProjectsFilter
                selectedProjectId={filter.project}
                onProjectClick={handleProjectClick}
                onClear={() => {
                  setFilter({
                    ...filter,
                    project: null,
                  });
                }}
              />
            )}
            {value === 2 && <div>Date Filter</div>}
          </Box>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Button fullWidth variant="contained" onClick={handleClose}>
                Apply
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={handleClose} fullWidth variant="outlined">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default PriceColorBrandFilter;
