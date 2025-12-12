import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';

function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin"
        element={token && role === 'ADMIN' ? <AdminPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
