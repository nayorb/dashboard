import React, { useEffect, useState } from "react";
import { todoistApi } from "../../../../services/todoist/todoist.service";
import { Box, Button, Chip, Grid } from "@mui/material";
import { Project } from "@doist/todoist-api-typescript";

export interface ProjectsFilterProps {
  selectedProjectId: string | null;
  onProjectClick: (projectId: string) => void;
  onClear: () => void;
}

const ProjectDot = ({ color = "green" }: { color?: string }) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill={color} />
    </svg>
  );
};

const ProjectsFilter = ({ onProjectClick, selectedProjectId, onClear }: ProjectsFilterProps) => {
  // projects useState
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    todoistApi.getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div>
      <Box m={0.5} display="inline-block">
        <Chip label="Clear" onClick={onClear} color="error" />
      </Box>
      {projects.map((project) => (
        <Box m={0.5} key={project.id} display="inline-block">
          <Chip
            label={
              <Box display="inline-flex" alignItems="center">
                <ProjectDot color={project.color} />
                <Box ml={1}>{project.name}</Box>
              </Box>
            }
            onClick={() => onProjectClick(project.id)}
            color={selectedProjectId === project.id ? "success" : "default"}
            variant={selectedProjectId === project.id ? "filled" : "outlined"}
          />
        </Box>
      ))}
    </div>
  );
};

export default ProjectsFilter;
