import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Home from '../pages/Home';
import CategorySelection from '../pages/CategorySelection';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CATEGORY_SELECTION} element={<CategorySelection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
