import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import CharacterDetails from './pages/CharacterDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" index element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
