import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Interior from "./components/Interior/Interior";
import Exterior from "./components/Exterior/Exterior";

import "./i18n";
import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/FAQ/FAQ";
import Conditions from "./components/Conditions/Conditions";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
