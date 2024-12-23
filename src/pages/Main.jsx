import React, { useState } from 'react';
import { Search, RefreshCw, Plus, ChevronDown, Menu, X } from 'lucide-react';

const RepositoryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const repositories = [
    { name: 'design-system', language: 'React', size: '7320 KB', visibility: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', visibility: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', visibility: 'Private', updated: '5 days ago' },
    { name: 'mobile-app', language: 'Swift', size: '3096 KB', visibility: 'Public', updated: '3 days ago' },
    { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', visibility: 'Private', updated: '6 days ago' },
    { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', visibility: 'Public', updated: '4 days ago' },
    { name: 'social-network', language: 'PHP', size: '5432 KB', visibility: 'Private', updated: '7 days ago' }
  ];

  const sidebarItems = [
    { icon: '🏠', label: 'Repositories' },
    { icon: '</>', label: 'AI Code Review' },
    { icon: '☁️', label: 'Cloud Security' },
    { icon: '📖', label: 'How to Use' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '📞', label: 'Support' },
    { icon: '↪️', label: 'Logout' }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      'React': 'bg-blue-500',
      'Javascript': 'bg-yellow-500',
      'Python': 'bg-green-500',
      'Swift': 'bg-orange-500',
      'Java': 'bg-red-500',
      'HTML/CSS': 'bg-purple-500',
      'PHP': 'bg-indigo-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-white">
     
      <header className="border-b border-gray-200 bg-white">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <img src="/api/placeholder/32/32" alt="CodeAnt AI Logo" className="w-8 h-8" />
              <span className="font-semibold text-lg">CodeAnt AI</span>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100"
            >
              <span className="hidden md:inline">UtkarshDhairyaPanwar</span>
              <ChevronDown size={16} />
            </button>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                {sidebarItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed md:static inset-y-0 left-0 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-200 ease-in-out
          w-64 bg-white border-r border-gray-200 z-10
        `}>
          <div className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold">Repositories</h1>
                <p className="text-gray-600">33 total repositories</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
                  <RefreshCw size={16} />
                  <span className="hidden md:inline">Refresh All</span>
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  <Plus size={16} />
                  <span className="hidden md:inline">Add Repository</span>
                </button>
              </div>
            </div>

            <div className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Repositories"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              {repositories.map((repo, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-md hover:border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-medium">{repo.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          {repo.language}
                        </div>
                        <span>{repo.size}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-sm rounded-md ${
                      repo.visibility === 'Public' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {repo.visibility}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Updated {repo.updated}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RepositoryPage;