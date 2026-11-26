import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import SolarSolutions from "./pages/SolarSolutions";
import EVCharging from "./pages/EVCharging";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solar-solutions" element={<SolarSolutions />} />
        <Route path="/ev-charging" element={<EVCharging />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Chatbot />
    </MotionConfig>
  );
}

export default App;