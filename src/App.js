import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Courses from './pages/Courses/Courses';
import Enrollments from './pages/Enrollments/Enrollments';
import Grades from './pages/Grades/Grades';
import CourseContent from './lib/CourseContent/CourseContent';
import { useState } from 'react';

function App() {

 // const [userType, setUserType] = useState("lecturer")
  // const [userType, setUserType] = useState("student")
  const [userType, setUserType] = useState()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard userType={userType} />} />
          <Route path="/login" element={<Login setUserType={setUserType}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses userType={userType} />} />
          <Route path="/enrollments" element={<Enrollments userType={userType}/>} />
          <Route path="/grades" element={<Grades userType={userType} />}  />
          <Route path="/CourseContent" element={<CourseContent userType={userType}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
