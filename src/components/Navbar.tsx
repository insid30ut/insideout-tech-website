'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image 
              src="/insideouttechnologiesllc.png" 
              alt="Insideout Technologies LLC Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-white tracking-wide hidden sm:block">
            Insideout Technologies
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="flex flex-col px-6 py-4 space-y-4">
             <Link href="/" className="text-slate-300 hover:text-white font-medium" onClick={() => setIsMenuOpen(false)}>
               Home
             </Link>
             <Link href="/services" className="text-slate-300 hover:text-white font-medium" onClick={() => setIsMenuOpen(false)}>
               Services
             </Link>
             <Link href="/about" className="text-slate-300 hover:text-white font-medium" onClick={() => setIsMenuOpen(false)}>
               About
             </Link>
             <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium" onClick={() => setIsMenuOpen(false)}>
               Contact
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
