import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import WhatsAppButton from "./pages/WhatsAppButton.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-promed-mint font-sans flex flex-col">
        <Navbar />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
