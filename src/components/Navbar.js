"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        NEON PAINT PLACE
      </Link>
      
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/experiences" className="nav-link" onClick={closeMenu}>Experiences</Link></li>
        <li><Link href="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link></li>
        <li><Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}
