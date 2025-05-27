import React from "react";
import AcademyCard from "./components/AcademyCard";
import CoursePrompt from "./components/CoursePrompt";
import AcademyNavbar from "./components/AcademyNavbar";

const Academy = () => {
  return (
    <div>
      {/* <TitleComponent/> */}
      <AcademyNavbar />
      <div className="gap-2 grid grid-cols-3 pb-2 overflow-x-hidden">
        <AcademyCard title={"Total Courses"} targetNumber={12} />
        <AcademyCard
          title={"Enrolled Learners"}
          targetNumber={81}
          color="blue"
        />
        <AcademyCard title={"Total Lessons"} targetNumber={94} color="rose" />
        <AcademyCard
          title={"Total Hours Watched"}
          targetNumber={682}
          color="purple"
        />
        <div className="flex w-[1200px] row-span-4 items-center">
          <CoursePrompt />
        </div>
      </div>
    </div>
  );
};

export default Academy;
