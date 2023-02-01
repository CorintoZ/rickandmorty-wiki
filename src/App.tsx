import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CharacterSearcher from './features/characters/components/CharacterSearcher';
import CharacterDetails from './pages/CharacterDetails';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
