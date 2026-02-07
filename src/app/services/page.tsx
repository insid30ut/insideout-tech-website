import ServiceCard from '../../components/ServiceCard';

// Business Services Data (from user)
const businessServices = [
  {
    title: "IT Consulting",
    description: "Strategic technology planning and implementation to align IT infrastructure with your business goals.",
    features: ["Technology Assessment", "Strategic Planning", "Cost Optimization"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    // Placeholder image
    imageSrc: "/images/it-consulting.jpg" 
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
    features: ["Threat Assessment", "Security Monitoring", "Compliance Management"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    imageSrc: "/images/cybersecurity.jpg"
  },
  {
    title: "Technical Support",
    description: "24/7 technical support and maintenance to keep your systems running smoothly.",
    features: ["24/7 Monitoring", "Rapid Response", "Preventive Maintenance"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    imageSrc: "/images/tech-support.jpg"
  }
];

// Residential Services Data
const residentialServices = [
  {
    title: "Computer Repair",
    description: "We come to you! Diagnosis and repair of desktops, laptops, and peripherals in the comfort of your home.",
    features: ["Virus & Malware Removal", "Hardware Upgrades", "Data Recovery"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
    imageSrc: "/images/computer-repair.jpg"
  },
  {
    title: "Home Network",
    description: "Boost your Wi-Fi signal and secure your home network for specialized streaming and smart home devices.",
    features: ["Wi-Fi Optimization", "Security Setup", "Smart Home Integration"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    imageSrc: "/images/home-network.jpg"
  },
  {
    title: "Camera Systems",
    description: "Protect your home with high-definition security cameras. Viewing available on your phone or tablet.",
    features: ["Installation & Setup", "Mobile Viewing", "Motion Detection"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    imageSrc: "/images/camera-system.jpg"
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Professional technology solutions tailored for your business and home.
        </p>
      </div>

      {/* Business Services Section */}
      <section id="business" className="container mx-auto px-6 py-16">
        <div className="flex items-center mb-10">
           <div className="h-10 w-2 bg-blue-600 mr-4 rounded-full"></div>
           <h2 className="text-3xl font-bold text-gray-900">Business Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* Residential Services Section */}
      <section id="residential" className="container mx-auto px-6 py-16">
        <div className="flex items-center mb-10">
           <div className="h-10 w-2 bg-green-500 mr-4 rounded-full"></div>
           <h2 className="text-3xl font-bold text-gray-900">Residential Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      
      {/* CTA Bottom Section */}
      <section className="container mx-auto px-6 text-center mt-8">
         <p className="text-gray-600 text-lg mb-6">Not sure what you need?</p>
         <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition">
            Contact Us for a Free Consultation
         </a>
      </section>
    </div>
  );
}
