import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Property Development",
    description: "End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover.",
    image: "/home/Image (white and blue concrete building under blue sky during daytime).png",
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover.",
    image: "/home/Image (man in yellow shirt and blue denim jeans jumping on brown wooden railings under blue and).png",
  },
  {
    id: 3,
    title: "Construction Management",
    description: "End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover.",
    image: "/home/Image (a person drawing a diagram on a piece of paper) (1).png",
  },
  {
    id: 4,
    title: "Turnkey Delivery",
    description: "End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover.",
    image: "/home/Image (white and blue concrete building under blue sky during daytime).png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f8f9fa] text-black page-padding py-24 md:py-32 relative">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start relative">
        
        {/* Left Side: Sticky Header */}
        <div className="w-full md:w-5/12 md:sticky md:top-32 shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-200/60 rounded-full text-xs font-semibold tracking-widest text-gray-500 mb-6 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
            Services we provide
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight text-gray-900 pr-8">
            Deep expertise across the sectors that matter
          </h2>
        </div>

        {/* Right Side: Scrolling Cards */}
        <div className="w-full md:w-7/12 flex flex-col gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full sm:w-40 h-40 sm:h-32 rounded-xl shrink-0 overflow-hidden">
                {service.image ? (
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className={`w-full h-full ${service.color}`} />
                )}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-3 py-2">
                <h3 className="text-2xl font-medium text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
