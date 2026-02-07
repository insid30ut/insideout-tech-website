import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image 
              src="/insideouttechnologiesllc.png" 
              alt="Insideout Technologies LLC Logo" 
              fill
              className="object-contain" // Ensures the logo fits well
            />
          </div>
          <span className="text-xl font-bold text-white tracking-wide hidden sm:block">
            Insideout Technologies
          </span>
        </Link>
        
        <ul className="flex space-x-8 text-sm font-medium text-slate-300">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
