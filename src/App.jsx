import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Faculties from "./pages/Faculties"; 
import About from "./pages/About";
import Academics from "./pages/Academics";
import LocateUs from "./pages/LocateUs";
import Facilities from "./pages/Facilities";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/locate-us" element={<LocateUs />} />
        <Route path="/facilities" element={<Facilities />} />
        {/* Add other routes like About Us, Faculties, etc., if needed */}
      </Routes>
    </Router>
  );
}

export default App;
