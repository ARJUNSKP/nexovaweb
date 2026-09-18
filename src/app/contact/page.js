import ContactLocations from "@/components/contact/ContactLocations";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Nexova",
  description: "Get in touch with Nexova. We have regional offices strategically placed to ensure we are always close to your project sites.",
};

export default function ContactPage() {
  return (
    <main className="bg-white w-full relative flex flex-col">
      {/* Hero Banner */}
      <div className="relative w-full h-[100dvh] bg-black">
        <img
          src="/2mJ3BbZjiWw3eKtOTCyARuDiI.webp"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Title Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 md:px-[43px]">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white text-center tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      {/* Locations Section */}
      <ContactLocations />

      {/* Form Section */}
      <ContactForm />
    </main>
  );
}
