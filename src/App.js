import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import EventPage from './pages/eventPage';
import LoginPage from './pages/loginPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event/:eventId" element={<EventPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
