import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Optimise Your Technology?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
          Whether you need a quick repair or a complete network overhaul, we're here to help. 
          Contact us today to schedule your service.
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
