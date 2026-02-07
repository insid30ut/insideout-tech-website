import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
         {/* Abstract geometric background or simply a gradient */}
         <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-90"></div>
         {/* Optional: Add a subtle pattern overlay here if desired */}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="block text-blue-400">Technology Solutions</span>
          <span className="block">From the Inside Out</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Professional IT services for your home and business. We specialize in network solutions, computer repair, and security camera systems.
          <span className="block mt-2 font-semibold text-white">We make house calls!</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/services" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            Our Services
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-transparent border-2 border-slate-400 hover:border-white text-slate-200 hover:text-white font-semibold rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
