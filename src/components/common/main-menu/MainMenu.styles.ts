import { ButtonBase, styled } from "@mui/material";

export const StyledMainMenuWrapper = styled("div")`
  padding: 24px;
  width: 256px;
  box-shadow: 0px 0px 20px -10px black;
`;

export const StyledMainMenuIconWrapper = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: lightblue;
  border-radius: 16px;
  padding: 8px 16px;
  margin-top: 8px;
  width: 100%;
`;
