export default function ContactLocations() {
  const locations = [
    {
      city: "Mumbai HQ",
      address: "124 Horizon Towers, Bandra Kurla Complex",
      postal: "Mumbai, Maharashtra 400051",
      phone: "+91 (22) 2456-7890",
      email: "mumbai@nexova.com",
    },
    {
      city: "Bangalore",
      address: "Tech Park Phase 2, Electronic City",
      postal: "Bangalore, Karnataka 560100",
      phone: "+91 (80) 4567-8901",
      email: "blr@nexova.com",
    },
    {
      city: "Delhi NCR",
      address: "Sector 42, DLF Cyber City",
      postal: "Gurugram, Haryana 122002",
      phone: "+91 (124) 5678-9012",
      email: "delhi@nexova.com",
    },
  ];

  return (
    <section className="bg-white py-24 w-full px-4 md:px-[43px]">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Our Locations
          </h2>
          <p className="text-gray-600 text-lg max-w-xl">
            We have regional offices strategically placed to ensure we are always close to your project sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="p-8 rounded-[24px] bg-[#f8f8f8] border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-4">{loc.city}</h3>
              <p className="text-gray-600 mb-1">{loc.address}</p>
              <p className="text-gray-600 mb-6">{loc.postal}</p>
              
              <div className="space-y-2">
                <p className="text-black font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0055a4]"></span>
                  {loc.phone}
                </p>
                <p className="text-black font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0055a4]"></span>
                  {loc.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
