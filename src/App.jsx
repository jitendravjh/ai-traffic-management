import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/traffic-system" element={<div>Traffic System Page (To be added later)</div>} />
    </Routes>
  );
}

export default App;
