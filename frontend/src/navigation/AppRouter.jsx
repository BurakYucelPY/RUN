import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Home from '../pages/Home';
import CategorySelection from '../pages/CategorySelection';
import ScenarioHistory from '../pages/ScenarioHistory';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CATEGORY_SELECTION} element={<CategorySelection />} />
        <Route path={ROUTES.SCENARIO_HISTORY} element={<ScenarioHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
