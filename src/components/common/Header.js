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

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-[#0a0a0a] text-white transition-transform duration-500 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="min-h-screen w-full flex flex-col-reverse md:flex-row pt-28 pb-12 px-6 md:px-12 lg:px-24 gap-12 md:gap-8">
          
          {/* Left Column (Bottom on Mobile): Navigation Links */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8 pt-10 md:pt-0 border-t md:border-t-0 md:border-r border-white/10 md:pr-12">
            <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2 md:mb-8">
              Navigation
            </div>
            
            <nav className="flex flex-col items-start gap-4 md:gap-6">
              {menuLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`inline-block text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight transition-transform duration-300 hover:scale-[1.05] origin-left ${
                    pathname === link.href ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <a
              href="#"
              className="md:hidden mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-[#0055a4] text-white font-medium rounded hover:bg-[#004080] transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column (Top on Mobile): Process Steps Graphic */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-12">
            <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6 md:mb-12">
              Our Process
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex flex-col gap-3 md:gap-4 group cursor-pointer">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0055a4] group-hover:border-[#0055a4] transition-all duration-300">
                      <Icon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[8px] md:text-[10px] font-bold tracking-widest text-gray-500 mb-1">
                        PHASE 0{step.id}
                      </div>
                      <h4 className="text-sm md:text-xl font-semibold mb-1 md:mb-2 leading-tight">{step.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed hidden sm:block">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
