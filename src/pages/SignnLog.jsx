import React, { useState } from "react";
import { Github, Gitlab, Key } from "lucide-react";

const SigninPage = () => {
  const [activeTab, setActiveTab] = useState("SAAS");



  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-0">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Left side with metrics */}
        <div>
          
          <div className="p-6 max-w-3xl relative hidden xl:block bg-white">
            <div className="bg-white p-6 rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.07)] border border-gray-200">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className=" p-2 w-14 rounded-lg">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
                      alt="logo"
                    />
                  </div>
                  <h1 className="text-xl font-bold text-[#1B2559]">
                    AI to Detect & Autofix Bad Code
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1B2559]">30+</div>
                  <div className="text-gray-600">Language Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1B2559]">10K+</div>
                  <div className="text-gray-600">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1B2559]">100K+</div>
                  <div className="text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.07)] absolute -bottom-32 right-1  w-64 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="relative w-12 h-12 mb-2">
                    <div className="absolute inset-0 rounded-full bg-[#EEF2FF]" />
                    <div
                      className="absolute inset-0 rounded-full border-[3px] border-blue-500"
                      style={{
                        clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                      }}
                    />
                  </div>
                  <div className="text-gray-600 font-bold mb-2">
                    Issues Fixed
                  </div>
                  <div className="text-3xl font-bold text-[#1B2559]">500K+</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-blue-500 font-medium mb-1">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    14%
                  </div>
                  <div className="text-gray-600 text-sm">This week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with login */}
        <div className="lg:w-1/2 mt-8 lg:mt-32">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <div className="flex flex-row ml-28 font-semibold">
                <img
                  src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
                  alt="CodeAnt AI"
                  className="h-8 inline-block mb-4"
                />{" "}
                <p>CodeAnt AI</p>
              </div>

              <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setActiveTab("SAAS")}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  activeTab === "SAAS"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setActiveTab("Self Hosted")}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  activeTab === "Self Hosted"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                Self Hosted
              </button>
            </div>

            {/* Sign In Options */}
            {activeTab === "SAAS" ? (
              <div className="space-y-3">
                <button className="w-full bg-white border rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <Github className="w-5 h-5" />
                  Sign in with Github
                </button>
                <button className="w-full bg-white border rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxEQ0uIkbMszowTDvYTnCamahLRDwajS4Kg&s"
                    alt="Bitbucket"
                    className="w-5 h-5"
                  />
                  Sign in with Bitbucket
                </button>
                <button className="w-full bg-white border rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_wk-5cfKPkf-drcZsHvUCJu08PYV_OY80Q&s"
                    alt="Azure"
                    className="w-5 h-5"
                  />
                  Sign in with Azure Devops
                </button>
                <button className="w-full bg-white border rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <Gitlab className="w-5 h-5" />
                  Sign in with GitLab
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <button className="w-full bg-white border rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <Gitlab className="w-5 h-5" />
                  Self Hosted GitLab
                </button>
                <button className="w-full bg-white border rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                  <Key className="w-5 h-5" />
                  Sign in with SSO
                </button>
              </div>
            )}

            {/* Privacy Policy */}
            <div className="text-sm text-gray-600 text-center mt-6">
              By signing up you agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
