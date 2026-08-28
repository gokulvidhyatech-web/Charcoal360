import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Website/Home";
import About from "./Pages/Website/About";
import ServicesPage from "./Pages/Website/ServicesPage";
import PortfolioPage from "./Pages/Website/PortfolioPage";
import "./style.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;