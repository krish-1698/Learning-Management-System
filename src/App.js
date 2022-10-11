import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Courses from './pages/Courses/Courses';
import Enrollments from './pages/Enrollments/Enrollments';
import Grades from './pages/Grades/Grades';
import CourseContent from './lib/CourseContent/CourseContent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/CourseContent" element={<CourseContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
