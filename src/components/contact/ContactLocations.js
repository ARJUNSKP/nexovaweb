export default function ContactLocations() {
  const locations = [
    {
      city: "New York HQ",
      address: "123 Business Avenue, Suite 100",
      postal: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@example.com",
    },
    {
      city: "London",
      address: "456 Tech Park, Innovation Way",
      postal: "London, UK E1 6AN",
      phone: "+44 20 7946 0958",
      email: "london@example.com",
    },
    {
      city: "Tokyo",
      address: "789 Cyber Street, Tech District",
      postal: "Tokyo, Japan 100-0001",
      phone: "+81 3-1234-5678",
      email: "tokyo@example.com",
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
            <div key={idx} className="p-8 bg-[#f8f8f8] border border-gray-100 hover:shadow-lg transition-shadow">
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
