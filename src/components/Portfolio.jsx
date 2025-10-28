import React, { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_ID
      )
      .then(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus(""), 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setFormStatus("error");
      });
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 sm:top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 h">
          <div className="flex items-center justify-center gap-4 sm:gap-10">
            <button
              onClick={() => setCurrentPage("home")}
              className={`text-xs sm:text-sm font-light tracking-wider uppercase transition-all ${
                currentPage === "home"
                  ? "text-white"
                  : "text-white/60 hover:text-white cursor-pointer"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`text-xs sm:text-sm font-light tracking-wider uppercase transition-all ${
                currentPage === "about"
                  ? "text-white"
                  : "text-white/60 hover:text-white cursor-pointer"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("projects")}
              className={`text-xs sm:text-sm font-light tracking-wider uppercase transition-all ${
                currentPage === "projects"
                  ? "text-white"
                  : "text-white/60 hover:text-white cursor-pointer"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`text-xs sm:text-sm font-light tracking-wider uppercase transition-all ${
                currentPage === "contact"
                  ? "text-white"
                  : "text-white/60 hover:text-white cursor-pointer"
              }`}
            >
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/aarav-kohli26/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all"
            >
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === "home" && <Home />}

      {/* About Page */}
      {currentPage === "about" && <About fadeIn={fadeIn} />}

      {/* Projects Page */}
      {currentPage === "projects" && <Projects fadeIn={fadeIn} />}

      {/* Contact Page */}
      {currentPage === "contact" && (
        <Contact
          fadeIn={fadeIn}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          formStatus={formStatus}
        />
      )}
    </div>
  );
}
