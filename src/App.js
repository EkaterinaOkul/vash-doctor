import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/pages/Home";
import Doctors from "./components/pages/Doctors";
import "./App.css";
import MedodsWidget from "./components/MedodsWidget/MedodsWidget";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Licenses from "./components/pages/Licenses";
import { AccessibilityWidget } from "./components/ AccessibilityWidget/ AccessibilityWidget";



function App() {
  return (
    <Router>
      <MedodsWidget />
      <AccessibilityWidget />

      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/licenses" element={<Licenses />} />
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
