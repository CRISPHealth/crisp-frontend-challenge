import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/metrics" element={<Result />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;
