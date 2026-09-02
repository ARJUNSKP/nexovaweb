export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white pt-20 pb-8 page-padding mt-auto">
      <div className="w-full flex flex-col gap-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col items-start">
              <img 
                src="/Mask group.svg" 
                alt="Nexova Logo" 
                width={86} 
                height={108} 
                className="object-contain"
              />
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Partner with us to turn strategic ambition into measurable business results.
            </p>

            <div>
              <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              Main Pages
            </h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li><a href="mailto:hello@construa.com" className="text-gray-400 hover:text-white transition-colors text-sm">hello@construa.com</a></li>
              <li><a href="tel:+4402079460318" className="text-gray-400 hover:text-white transition-colors text-sm">+44 (0) 20 7946 0318</a></li>
              <li className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                12 Aldgate Square, London, EC3N 1AB
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms and conditions</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
          <div>
            Designed & Developed By Arjun | Fayas
          </div>
        </div>
        
      </div>
    </footer>
  );
}
