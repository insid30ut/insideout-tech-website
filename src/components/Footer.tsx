import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4">Insideout Technologies LLC</h3>
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            Professional Network Solutions, Computer Repair, and Camera System Setups for business and residential clients. 
            <span className="block mt-1 text-blue-400">We make house calls!</span>
          </p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Insideout Technologies LLC. All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
               <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
               <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               info@insideout-tech.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
