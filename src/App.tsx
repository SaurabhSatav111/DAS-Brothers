import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import CtaBanner from "./components/sections/CtaBanner";
import Careers from "./components/sections/Careers";
import Footer from "./components/sections/Footer";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Apply theme changes to document and localStorage
  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Navbar theme={theme} setTheme={handleThemeChange} />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <CtaBanner />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
