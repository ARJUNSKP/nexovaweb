"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Binoculars, PencilRuler, Home as HomeIcon, Handshake } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Contact Us", href: "/contact" },
];

const processSteps = [
  { id: 1, title: "Discovery & Brief", icon: Binoculars, desc: "Understanding goals & constraints." },
  { id: 2, title: "Design & Planning", icon: PencilRuler, desc: "Architectural & engineering plans." },
  { id: 3, title: "Construction Phase", icon: HomeIcon, desc: "Strict quality control & execution." },
  { id: 4, title: "Final Handover", icon: Handshake, desc: "Exhaustive inspections & delivery." },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/40 py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        } ${isVisible && !menuOpen ? "translate-y-0" : menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="page-padding flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img 
                src="/Mask group.svg" 
                alt="Nexova Logo" 
                width={86} 
                height={108} 
                className="object-contain cursor-pointer relative z-50"
              />
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-6 relative z-50">
            {/* CTA Button (Hidden on Mobile) */}
            {/* <div className="hidden md:block">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-[#0055a4] text-white text-sm font-medium rounded hover:bg-[#004080] transition-colors"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </a>
            </div> */}

            {/* Universal Menu Toggle */}
            <button
              className="text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Right Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-40 w-full md:w-[450px] text-white transition-transform duration-500 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background Image inside Drawer */}
        <img 
          src="/Eyv1ZwKmJy5eSYZZEwI9We1sNis.jpg" 
          alt="Menu Background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Dark Overlay inside Drawer */}
        <div className="absolute inset-0 bg-black/85 z-10" />

        {/* Close Button inside Drawer */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 z-30 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative z-20 min-h-screen w-full flex flex-col pt-32 pb-12 px-8">
          
          <div className="flex flex-col gap-12 flex-1">
            
            {/* Main Navigation Links */}
            <nav className="w-full flex flex-col gap-6">
              {menuLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`inline-block text-3xl md:text-4xl font-light tracking-wide uppercase transition-colors duration-300 ${
                    pathname === link.href ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  {link.name} <span className="opacity-50">+</span>
                </Link>
              ))}
            </nav>

          </div>

          {/* Bottom Bar: Contact Info */}
          <div className="mt-16 pt-8 flex flex-col gap-4 w-full border-t border-white/20">
            <a href="tel:+4402079460318" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +44 (0) 20 7946 0318
            </a>
            <a href="mailto:hello@construa.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hello@construa.com
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
