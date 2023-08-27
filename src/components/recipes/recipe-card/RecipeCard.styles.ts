import { ButtonBase, styled } from "@mui/material";

export const StyledRecipeCardContainer = styled(ButtonBase)`
  box-shadow: 0 0 10px -6px #333;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 14px -6px #333;
  }
`;

export const StyledRecipeCardImage = styled("div")`
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0;
  top: 0;
  background-image: url("${({ id }) => `/images/recipes/${id}.jpg`}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
