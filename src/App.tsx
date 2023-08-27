import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RecipesPage from "./pages/modules/recipes/RecipesPage";
import MainMenu from "./components/common/main-menu/MainMenu";
import { AppContentWrapper, AppSiteWrapper } from "./App.styles";
import RecipeDetailPage from "./pages/modules/recipes/RecipeDetailPage";
import WeatherPage from "./pages/modules/weather/WeatherPage";
import TodoistPage from "./pages/modules/todoist/TodoistPage";
import YoutubePage from "./pages/modules/youtube/YoutubePage";
import NayPage from "./pages/modules/nay/NayPage";
import HomePage from "./pages/HomePage";
import LivingRoomTablePage from "./pages/LivingRoomTablePage";
import Dashboard from "./pages/Dashboard";

import store from "./store/store";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppSiteWrapper>
          <MainMenu />
          <AppContentWrapper>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/nay" element={<NayPage />} />
              <Route path="/todoist" element={<TodoistPage />} />
              <Route path="/youtube" element={<YoutubePage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/living-room-table" element={<LivingRoomTablePage />} />
            </Routes>
          </AppContentWrapper>
        </AppSiteWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
