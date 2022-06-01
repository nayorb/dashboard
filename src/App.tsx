import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RecipesPage from "./pages/modules/recipes/RecipesPage";
import MainMenu from "./components/common/main-menu/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainMenu />
        <Routes>
          <Route path="/" element={<RecipesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
