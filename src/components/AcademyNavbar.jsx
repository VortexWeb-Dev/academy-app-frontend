import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Book,
  HelpCircle,
  ChevronDown,
  User,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ChartArea } from "lucide-react";

const AcademyNavbar = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Load user type from localStorage on component mount
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    } else {
      // Set default to 'user' if not found
      localStorage.setItem("userType", "user");
    }
  }, []);

  const handleUserTypeChange = (type) => {
    setUserType(type);
    localStorage.setItem("userType", type);
    setIsDropdownOpen(false);
  };

  const navItems = [
    {
      icon: <Book className="w-5 h-5" />,
      text: "Courses",
      navigate: "/courses",
    },
    {
      icon: <ChartArea className="w-5 h-5" />,
      text: "Progress",
      navigate: "/progress",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      text: "Help",
      navigate: "/help",
    },
  ];

  return (
    <nav className="bg-white shadow-xl rounded-lg p-4 mt-2">
      <div className="flex gap-6 items-center justify-center text-2xl relative">
        <div
          className="absolute left-0 hover:bg-gray-200 p-3 rounded-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          <GraduationCap className="w-8 h-8" />
        </div>

        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              item.navigate && navigate(item.navigate);
            }}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                                 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1
                                 active:translate-y-0 active:shadow-sm hover:cursor-pointer"
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
          </div>
        ))}

        {/* User Type Dropdown */}
        <div className="absolute right-0">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {userType === "user" ? (
                <User className="w-5 h-5" />
              ) : (
                <Shield className="w-5 h-5" />
              )}
              <span className="capitalize">{userType}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                <div
                  onClick={() => handleUserTypeChange("user")}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    userType === "user" ? "bg-blue-50 text-blue-600" : ""
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>User</span>
                </div>
                <div
                  onClick={() => handleUserTypeChange("admin")}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    userType === "admin" ? "bg-blue-50 text-blue-600" : ""
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  <span>Admin</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AcademyNavbar;
