import React from "react";
import { Box } from "@mui/material";

export interface StatusProps {
  text: string;
  icon: React.ReactNode;
  color: string;
}

const Status = ({ text, icon, color }: StatusProps) => {
  return (
    <Box
      height="100%"
      color={color}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      {icon}
      <div>{text}</div>
    </Box>
  );
};

export default Status;
