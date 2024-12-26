import React, { useState } from "react";
import { Search, RefreshCw, Plus } from "lucide-react";
import SidebarNav from "../components/navbar";
import { ChevronDown, Home, Code, Cloud, Book, Settings } from "lucide-react";
const RepositoryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const navItems = [
    { icon: <Home size={16} />, label: "Repositories", active: true },
    { icon: <Code size={16} />, label: "AI Code Review" },
    { icon: <Cloud size={16} />, label: "Cloud Security" },
    { icon: <Book size={16} />, label: "How to Use" },
    { icon: <Settings size={16} />, label: "Settings" },
  ];
  const repositories = [
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      visibility: "Public",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      visibility: "Private",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      visibility: "Private",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      visibility: "Public",
      updated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      visibility: "Private",
      updated: "6 days ago",
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      visibility: "Public",
      updated: "4 days ago",
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      visibility: "Private",
      updated: "7 days ago",
    },
  ];

  const getLanguageColor = (language) => {
    const colors = {
      React: "bg-blue-500",
      Javascript: "bg-yellow-500",
      Python: "bg-green-500",
      Swift: "bg-orange-500",
      Java: "bg-red-500",
      "HTML/CSS": "bg-purple-500",
      PHP: "bg-indigo-500",
    };
    return colors[language] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex bg-white">
        <div className="hidden md:block">
          <SidebarNav
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="block md:hidden">
          <div className="block md:hidden w-full">
            {" "}
            <div className="flex mt-6 ml-6 items-center gap-2">
              {" "}
              <img
                src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
                alt="CodeAnt AI Logo"
                className="w-9 h-9 rounded-full"
              />{" "}
              <span className="font-light text-3xl">CodeAnt AI</span>{" "}
            </div>{" "}
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center  rounded-lg w-96 gap-2 px-3 py-2  mt-4 ml-4  hover:bg-white"
            >
              <span className="ml-6">UtkarshDhairyaPanwar</span>
              <ChevronDown size={16} />
            </button>
            {isUserDropdownOpen && (
              <div className="absolute left-0  w-full bg-white rounded-md shadow-lg border border-gray-200">
                {" "}
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    {" "}
                    {item.icon} <span>{item.label}</span>{" "}
                  </button>
                ))}{" "}
              </div>
            )}{" "}
          </div>
        </div>
      </div>

      <main className="bg-white md:ml-72 mt-3 border rounded-lg pt-4 mx-4 md:mr-7">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-gray-600">33 total repositories</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
                <RefreshCw size={16} />
                <span className="inline">Refresh All</span>
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                <Plus size={16} />
                <span className="inline">Add Repository</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full max-w-md px-4">
            <div className="flex items-center w-full bg-white border border-gray-200 rounded-md">
              <Search
                size={20}
                className="ml-3 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search Repositories"
                className="w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-0 divide-y divide-gray-200">
            {repositories.map((repo, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row py-6 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-black hover:text-blue-500">
                      {repo.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        repo.visibility === "Public"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {repo.visibility}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${getLanguageColor(
                          repo.language
                        )}`}
                      ></div>
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{repo.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Updated {repo.updated}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RepositoryPage;
