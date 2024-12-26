import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoryPage from "./pages/Main";
import LoginPage from "./pages/SignnLog";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepositoryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
