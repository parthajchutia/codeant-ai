import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  Home,
  Code,
  Cloud,
  Book,
  Settings,
  Phone,
  LogOut,
} from "lucide-react";

const SidebarNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const navItems = [
    { icon: <Home size={16} />, label: "Repositories", active: true },
    { icon: <Code size={16} />, label: "AI Code Review" },
    { icon: <Cloud size={16} />, label: "Cloud Security" },
    { icon: <Book size={16} />, label: "How to Use" },
    { icon: <Settings size={16} />, label: "Settings" },
  ];

  return (
    <>
      
      <button
        className="p-2 md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖️" : <Menu size={20} />}
      </button>

      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } t ransition-transform md:translate-x-0 z-40`}
      >
        <div className="flex flex-col h-full">
         <div className="flex mt-6 ml-6 items-center gap-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
              alt="CodeAnt AI Logo"
              className="w-9 h-9 rounded-full"
            />
            <span className="font-light text-3xl">CodeAnt AI</span>
          </div>

          {/* User Dropdown */}
          <button
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            className="flex items-center border-2 rounded-lg gap-2 px-3 mr-6 py-2 ml-5 mt-4 mb-3 hover:bg-gray-100"
          >
            <span className="hidden md:inline">UtkarshDhairyaPanwar</span>
            <ChevronDown size={16} />
          </button>

          {isUserDropdownOpen && (
            <div className="absolute left-0 mt-32 ml-6 w-48 bg-white rounded-md shadow-lg border border-gray-200">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}

        
          <ul className="flex-1 px-4 space-y-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-blue-500 ${
                  item.active ? "bg-blue-600 text-white " : "text-gray-700"
                }`}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              <Phone size={16} /> Support
            </button>
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
