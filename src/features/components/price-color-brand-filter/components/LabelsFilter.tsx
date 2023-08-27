import React, { useEffect, useState } from "react";
import { todoistApi } from "../../../../services/todoist/todoist.service";
import { Box, Button, Chip, Grid } from "@mui/material";

export interface LabelsFilterProps {
  selectedLabels: Record<string, boolean>;
  onLabelClick: (label: string) => void;
  onClear: () => void;
}

const LabelsFilter = ({ selectedLabels, onLabelClick, onClear }: LabelsFilterProps) => {
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    // get todoist labels
    todoistApi.getLabels().then((labels) => {
      setLabels(labels.map((label) => label.name));
    });
  }, []);

  const isLabelSelected = (label: string): boolean => {
    return selectedLabels[label];
  };

  return (
    <div>
      <Box m={0.5} display="inline-block">
        <Chip label="Clear" onClick={onClear} color="error" />
      </Box>
      {labels.map((label) => (
        <Box m={0.5} key={label} display="inline-block">
          <Chip
            label={label}
            onClick={() => onLabelClick(label)}
            color={isLabelSelected(label) ? "success" : "default"}
            variant={isLabelSelected(label) ? "filled" : "outlined"}
          />
        </Box>
      ))}
    </div>
  );
};

export default LabelsFilter;
