import React, { useState } from 'react'
import './App.css'
import Academy from './Academy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CourseGrid from './components/CourseGrid';
import AcademyHelpPage from './components/AcademyHelpPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Academy />} />
        <Route path="/courses" element={<CourseGrid />} />
        <Route path="/help" element={<AcademyHelpPage />} />

      </Routes>
      {/* <Academy/> */}
    </>
  );
}

export default App