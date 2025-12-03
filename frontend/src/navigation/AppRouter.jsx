import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Home from '../pages/Home';
import CategorySelection from '../pages/CategorySelection';
import ScenarioHistory from '../pages/ScenarioHistory';
import ScenarioSciFi from '../pages/ScenarioSciFi';
import ScenarioComedy from '../pages/ScenarioComedy';
import ScenarioHorror from '../pages/ScenarioHorror';
import ScenarioHardcore from '../pages/ScenarioHardcore';
import ScenarioFantasy from '../pages/ScenarioFantasy';
import Story from '../pages/Story/Story';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CATEGORY_SELECTION} element={<CategorySelection />} />
        <Route path={ROUTES.SCENARIO_HISTORY} element={<ScenarioHistory />} />
        <Route path={ROUTES.SCENARIO_SCIFI} element={<ScenarioSciFi />} />
        <Route path={ROUTES.SCENARIO_COMEDY} element={<ScenarioComedy />} />
        <Route path={ROUTES.SCENARIO_HORROR} element={<ScenarioHorror />} />
        <Route path={ROUTES.SCENARIO_HARDCORE} element={<ScenarioHardcore />} />
        <Route path={ROUTES.SCENARIO_FANTASY} element={<ScenarioFantasy />} />
        <Route path={ROUTES.STORY} element={<Story />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
