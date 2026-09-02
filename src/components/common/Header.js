"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="page-padding flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/Mask group.svg" 
            alt="Nexova Logo" 
            width={86} 
            height={108} 
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[10px]">
          <a href="#" className="px-[12px] py-[7px] bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors">
            Home
          </a>
          <a href="#" className="px-[12px] py-[7px] bg-white/20 text-white text-sm font-medium rounded hover:bg-white/30 transition-colors backdrop-blur-sm">
            About Us
          </a>
          <a href="#" className="px-[12px] py-[7px] bg-white/20 text-white text-sm font-medium rounded hover:bg-white/30 transition-colors backdrop-blur-sm">
            Services
          </a>
          <a href="#" className="px-[12px] py-[7px] bg-white/20 text-white text-sm font-medium rounded hover:bg-white/30 transition-colors backdrop-blur-sm">
            Projects
          </a>
          <a href="#" className="px-[12px] py-[7px] bg-white/20 text-white text-sm font-medium rounded hover:bg-white/30 transition-colors backdrop-blur-sm">
            Contact Us
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:block">
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0055a4] text-white text-sm font-medium rounded hover:bg-[#004080] transition-colors"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 gap-4 text-white">
          <a href="#" className="px-6 py-2 bg-white text-black rounded w-4/5 text-center font-medium">
            Home
          </a>
          <a href="#" className="px-6 py-2 bg-white/20 rounded w-4/5 text-center font-medium">
            About Us
          </a>
          <a href="#" className="px-6 py-2 bg-white/20 rounded w-4/5 text-center font-medium">
            Services
          </a>
          <a href="#" className="px-6 py-2 bg-white/20 rounded w-4/5 text-center font-medium">
            Projects
          </a>
          <a href="#" className="px-6 py-2 bg-white/20 rounded w-4/5 text-center font-medium">
            Contact Us
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 mt-4 bg-[#0055a4] text-white rounded w-4/5 text-center font-medium">
            Start a Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
