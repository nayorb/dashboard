import { Autocomplete, Box, Input, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import WeekendIcon from "@mui/icons-material/Weekend";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import CityService from "../../../services/city.service";
import useWeather from "../../../hooks/weather/useWeather";
import { StyledMainMenuIconWrapper, StyledMainMenuWrapper } from "./MainMenu.styles";

const MainMenu = () => {
  const { localCity, setCity, weatherData } = useWeather();
  const navigate = useNavigate();

  return (
    <StyledMainMenuWrapper>
      {weatherData && <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather.icon}@2x.png`} />}
      <Autocomplete
        renderInput={({ InputProps, inputProps }) => (
          <Input
            {...InputProps}
            inputProps={inputProps}
            sx={{
              width: "100%",
            }}
          />
        )}
        options={CityService.getListOfCities()}
        value={localCity}
        onChange={(_, option) => setCity(option || null)}
      />
      <Box mt={4}>
        <StyledMainMenuIconWrapper onClick={() => navigate("/")}>
          <DashboardIcon />
          <Typography ml={1}>Dashboard</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/home")}>
          <HomeIcon />
          <Typography ml={1}>Home</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/nay")}>
          <CheckBoxIcon />
          <Typography ml={1}>Nay</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/todoist")}>
          <CheckBoxIcon />
          <Typography ml={1}>Todoist</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/recipes")}>
          <RestaurantIcon />
          <Typography ml={1}>Recipes</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/youtube")}>
          <YouTubeIcon />
          <Typography ml={1}>YouTube</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/weather")}>
          <WbSunnyIcon />
          <Typography ml={1}>Weather</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/food")}>
          <FastfoodIcon />
          <Typography ml={1}>Food</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/guitar")}>
          <MusicNoteIcon />
          <Typography ml={1}>Guitar</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/children")}>
          <ChildFriendlyIcon />
          <Typography ml={1}>Children</Typography>
        </StyledMainMenuIconWrapper>
        <StyledMainMenuIconWrapper onClick={() => navigate("/living-room-table")}>
          <WeekendIcon />
          <Typography ml={1}>Living room table</Typography>
        </StyledMainMenuIconWrapper>
      </Box>
    </StyledMainMenuWrapper>
  );
};

export default MainMenu;
