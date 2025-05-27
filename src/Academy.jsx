import React from "react";
import { Book, HelpCircle, GraduationCap } from "lucide-react";
import AcademyCard from "./components/AcademyCard";
import CoursePrompt from "./components/CoursePrompt";
import { useNavigate } from "react-router-dom";

const Academy = () => {
  const navItems = [
    { icon: <Book className="w-5 h-5" />, text: "Courses", href: "courses" },
    { icon: <HelpCircle className="w-5 h-5" />, text: "Help", href: "help" },
  ];

  const navigate = useNavigate();
  return (
    <div>
      {/* <TitleComponent/> */}
      <nav className="bg-white shadow-xl rounded-lg p-4 mt-2">
        <div className="flex gap-6 items-center justify-center text-2xl relative">
          <div
            className="absolute left-0 hover:bg-gray-200 p-3 rounded-full cursor-pointer"
            onClick={() => navigate("/academy")}
          >
            <GraduationCap className="w-8 h-8" />
          </div>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                     hover:bg-blue-50 hover:shadow-md hover:-translate-y-1
                     active:translate-y-0 active:shadow-sm"
            >
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 
                          group-hover:from-blue-50 group-hover:via-blue-100 group-hover:to-blue-50 
                          transition-all duration-500"
              />

              <span
                className="relative transform transition-all duration-300 
                         group-hover:scale-110 group-hover:rotate-6 group-hover:text-blue-600"
              >
                {item.icon}
              </span>

              <span
                className="relative font-medium transition-all duration-300 
                         group-hover:text-blue-600 group-hover:font-semibold"
              >
                {item.text}
              </span>

              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 
                          transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </div>
      </nav>
      <div className="gap-2 grid grid-cols-3 pb-2 overflow-x-hidden">
        <AcademyCard title={"Total Courses"} targetNumber={58} />
        <AcademyCard
          title={"Enrolled Learners"}
          targetNumber={8888}
          color="blue"
        />
        <AcademyCard title={"Total Lessons"} targetNumber={7496} color="rose" />
        <AcademyCard
          title={"Enrolled Student"}
          targetNumber={6828}
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
