import React, { useState } from "react";
import "./App.css";
import Academy from "./Academy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseGrid from "./components/CourseGrid";
import AcademyHelpPage from "./components/AcademyHelpPage";
import LessonsPage from "./components/Lessons/LessonsPage";
import LessonContent from "./components/Lessons/LessonContent";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Academy />} />
        <Route path="/courses" element={<CourseGrid />} />
        <Route path="/courses/:courseId" element={<LessonsPage />} />
        <Route path="/help" element={<AcademyHelpPage />} />
        <Route
          path="/courses/:courseId/lessons/:lessonId"
          element={
            <LessonContent
              youtubeUrl="https://www.youtube.com/watch?v=9B4CvtzXRpc"
              pdfUrl="https://www.newline.co/fullstack-react/assets/media/sGEMe/MNzue/30-days-of-react-ebook-fullstackio.pdf"
              courseTitle="ReactJS Beginner to Advanced"
            />
          }
        />
      </Routes>
      {/* <Academy/> */}
    </>
  );
}

export default App;
