import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './features/auth/components/ProtectedRoute';
import CharacterDetails from './pages/CharacterDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" index element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
