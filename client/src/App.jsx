import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";
import Parent from "./pages/Parent";
import Kiosk from "./pages/Kiosk";
import ScheduleManager from "./pages/ScheduleManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/admin/schedule" element={<ScheduleManager />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;